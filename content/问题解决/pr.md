---
title: 从 Fork 向上游开 PR
author: jimmy
date: '2026-8-4'
---

以 [LoopX #2763](https://github.com/huangruiteng/loopx/pull/2763) 为例，说明没有上游写权限时，如何把本地改动合进原项目。

对应 issue：[#2761](https://github.com/huangruiteng/loopx/issues/2761)

---

## 一、原理

贡献者通常不能直接 `push` 到原仓库（上游）。协作靠三份拷贝：

```text
上游（upstream）
  huangruiteng/loopx     ← 原项目主干
        ▲
        │  Pull Request（申请合并）
        │
你的 fork
  hezihua/loopx          ← 你有写权限的 GitHub 副本
        ▲
        │  git push
        │
本地工作区
  改文件、commit 的地方
```

| 位置 | 作用 |
|------|------|
| 本地 | 编辑、验证、commit |
| Fork | 你能 push 的远程 |
| 上游 | 真正要合入的目标；通过 PR 申请 |

直接推上游若出现 `Permission denied`，属于正常情况，应改为推 fork 再开 PR。

**开 PR ≠ 已合并。** PR 是审查申请；合并由有权限的 maintainer 完成。

---

## 二、本次实际做了什么（#2763）

1. **选切口**：修架构文档与代码不一致（七层 / 六动词词表 vs 真实 Turn 枚举），纯文档、范围小。
2. **干净分支**：从 `origin/main` 建 worktree 与分支  
   `codex/align-architecture-docs-inventory-2761`。
3. **改文件**：
   - `docs/architecture.md`：六层 durable surface；`next_probe`/pre-tick 标为 optional；补充 Turn Decision Vocabulary（`LoopXTurnRoute` / `LoopXTurnResultKind`）。
   - 若干 control-plane course 入口：避免把六动词写成唯一协议词表。
4. **验证**：`loopx check`（public boundary）+ `git diff --check`。
5. **Commit**：说明 why，并用 `Fixes #2761` / `Closes #2761` 关联 issue。
6. **Push fork**：`git push -u fork HEAD`（推上游会 403）。
7. **开 PR**：head = `hezihua:codex/...`，base = `huangruiteng:main` → [#2763](https://github.com/huangruiteng/loopx/pull/2763)。

---

## 三、怎么开 PR

网页和 `gh` **二选一**即可，效果相同：都是向上游开一条 PR。任选一种完成即可，不必两种都做。

### 3.1 网页

1. 本地 commit 后推到 fork：
   ```bash
   git remote add fork https://github.com/<用户名>/loopx.git   # 仅首次
   git push -u fork HEAD
   ```
2. 打开 compare 链接（或 fork 页的 **Compare & pull request**）：
   ```text
   https://github.com/huangruiteng/loopx/compare/main...<用户名>:loopx:<分支名>?expand=1
   ```
3. 确认：
   - **base**：`huangruiteng/loopx` 的 `main`
   - **compare**：你的 fork 分支
4. 填写标题与正文后点 **Create pull request**。

### 3.2 命令行

```bash
gh pr create \
  --repo huangruiteng/loopx \
  --head <用户名>:<分支名> \
  --base main \
  --title "简短标题" \
  --body "$(cat <<'EOF'
## Summary
- 改了什么、为什么

Fixes #<issue号>

## Test plan
- [ ] 跑了哪些检查

EOF
)"
```

需要先 `gh auth login`（或可用 token）。

### 3.3 PR 正文建议包含

- **Summary**：改了什么、对应哪个 issue
- **Test plan**：验证命令与结果
- 用 `Fixes #N` 便于合并后自动关 issue

---

## 四、开完之后

```text
PR Open → CI / Review →（同分支继续改并 push）→ Maintainer Merge → 进入上游 main
```

- Review 要改代码：在**同一分支**继续 commit，再 `git push fork HEAD`；PR 会自动更新。
- 合并后可选同步自己的 fork `main`：
  ```bash
  git fetch origin
  git checkout main
  git merge origin/main
  git push fork main
  ```

---

## 五、可复用命令

```bash
# 从最新 main 开主题分支（示例）
git fetch origin
git worktree add -b codex/your-topic ../loopx-wt/your-topic origin/main

# 提交（按路径 stage，避免 git add .）
git add <明确路径>
git commit -m "$(cat <<'EOF'
docs: your concise why

EOF
)"

# 推到 fork
git push -u fork HEAD

# 开向上游的 PR（见上文 gh pr create）
```

---

## 六、注意

- PR 必须开向**上游仓库**，不是只在 fork 里合到自己的 `main`。
- 一个 PR 一个主题；文档 / 行为 / 大重构尽量拆开。
- 不要提交私有状态、本机绝对路径、credentials；LoopX 可用 `loopx check` 扫边界。
- 没有上游写权限时，合并只能等 maintainer。

---

## 七、参考

- 本次 PR：https://github.com/huangruiteng/loopx/pull/2763
- 对应 issue：https://github.com/huangruiteng/loopx/issues/2761
- 上游仓库：https://github.com/huangruiteng/loopx
