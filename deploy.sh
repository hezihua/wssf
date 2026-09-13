#!/usr/bin/env sh
set -e

ROOT="$(CDPATH= cd -- "$(dirname "$0")" && pwd)"
cd "$ROOT"

REMOTE="${DEPLOY_REMOTE:-git@github.com:hezihua/wssf.git}"
SOURCE_BRANCH="${SOURCE_BRANCH:-master}"
PAGES_BRANCH="${PAGES_BRANCH:-gh-pages}"

# ---------- 1) 提交并推送源代码到 master ----------
if [ ! -d .git ]; then
  git init -b "$SOURCE_BRANCH"
fi

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REMOTE"
else
  git remote add origin "$REMOTE"
fi

# 确保在源码分支上
current="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")"
if [ "$current" = "HEAD" ] || [ -z "$current" ]; then
  git checkout -B "$SOURCE_BRANCH"
elif [ "$current" != "$SOURCE_BRANCH" ]; then
  git checkout -B "$SOURCE_BRANCH"
fi

if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "chore: sync source $(date '+%Y-%m-%d %H:%M')"
fi

# 仓库可能尚无 master，首次用 -u
git push -u origin "HEAD:$SOURCE_BRANCH"

# ---------- 2) 构建静态站并推到 gh-pages ----------
npm run build

cd out

printf '\n' > .nojekyll
cp ../README.md ./README.md

# GitHub Pages 对本仓库会 404 掉 `_next`，重命名规避
if [ -d _next ]; then
  mv _next next
  find . -type f \( \
      -name '*.html' -o -name '*.js' -o -name '*.css' -o \
      -name '*.json' -o -name '*.txt' -o -name '*.map' \
    \) -exec sed -i 's|/_next/|/next/|g' {} +
fi

rm -rf .git
git init -b "$PAGES_BRANCH"
git add -A
git commit -m "deploy $(date '+%Y-%m-%d %H:%M')"
git push -f "$REMOTE" "HEAD:$PAGES_BRANCH"

cd "$ROOT"
echo "✓ 源码已推送: $REMOTE ($SOURCE_BRANCH)"
echo "✓ 站点已发布: https://hezihua.github.io/wssf/ ($PAGES_BRANCH)"
