---
title: rsa加密
author: jimmy
date: '2024-9-24'
---

# RSA 加密

## 简介

什么是RSA加密

RSA加密算法是一种非对称加密算法，RSA加密使用了"一对"密钥.分别是公钥和私钥,这个公钥和私钥其实就是一组数字!其二进制位长度可以是1024位或者2048位.长度越长其加密强度越大,目前为止公之于众的能破解的最大长度为768位密钥,只要高于768位,相对就比较安全.所以目前为止,这种加密算法一直被广泛使用.

## 代码示例

```
import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdH\n'

const privateKey = 'MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAqhHyZfSsYourNxaY\n'

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}
```