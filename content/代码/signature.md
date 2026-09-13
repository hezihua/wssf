---
title: 数字签名
author: jimmy
date: '2024-9-24'
---

# 数字签名实现

## 签名流程图

![.png](https://s2.loli.net/2024/09/24/bRaWZi5MHyeOQcX.png 'https://sm.ms/image/bRaWZi5MHyeOQcX')

## 代码实现

```
export const salt = '49A1EBA40661CC96DAFF6263B2E3D813'
export function generateMd5Signature(params, salt) {
  // 对请求参数按照字典序进行排序
  const sortedParams = getSortParams(params)
  // 拼接排序后的请求参数和盐值
  let concatenatedString = ''
  for (const [key, value] of Object.entries(sortedParams)) {
    concatenatedString += `${key}=${value}&`
  }
  concatenatedString += `salt=${salt}`
  // 使用MD5哈希算法计算签名

  const result = md5(concatenatedString)
  return result
}
```