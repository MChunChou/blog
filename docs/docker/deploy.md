---
title: 使用 Docker 進行本機端開發
description: 使用 Docker 進行本機端開發
keywords: [docker]
sidebar_position: 2
---

在 docker 的使用教學中， 最基礎的使用方式就是 pull 一個 image 或者是使用 Dockerfile 建立 image,  並將 image run 成 container。

但是這種方式， 一般是把”當下”的檔案複製到 container 中執行，當外部進行修改時，需要重複上述動作才會在 container 中更新。

使用 docker 最初目標是為了讓開發環境能夠一致，因此希望的是能夠將本機端的程式碼同步到 docker 中，修改時就能夠立刻更新。

關於 Docker volumn