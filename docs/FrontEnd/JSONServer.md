# JSON Server (使用版本 0.17.4)

Json server 一般是用來建立前端測試或者 demo 使用的 API 

## Install

```bash
npm install json-server
```

*如果要直接在 cmd 中下 json-server 指令時可以安裝成全域*

## 建立第一個基礎的 json server

新增一個 db.json, 輸入以下測試資料
```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

其中的 post , comments, profile 都會變成路徑名稱

```
/post 
/comments
/profile
```

然後下指令 

```bash
json-server db.json
```

*如果安裝為全域可以直接下指令*

*如果不是可以寫在 package start 中, 然後使用 npm start 指令*


好! 這樣我們就完成了一個測試的 server 了! ~~結束~~ 

## 操作方式 (RESTful)

#### GET /posts
```json
[
  {
    "id": "1",
    "title": "a title",
    "views": 100
  },
  {
    "id": "2",
    "title": "another title",
    "views": 200
  }
]
```

#### GET /posts/:id 
```json 
// /posts/1
{
  "id": "1",
  "title": "a title",
  "views": 100
}
```
#### POST /posts
```
# using http
POST http://localhost:8000/posts 
{
    "id":"3"
}
```

此時會發現 db.json 中的 posts 會多出一筆
```json
{
    "id": "3"
}
```
#### PUT /posts/:id
#### PATCH /post/:id
#### DELETE /post/:id

## 其他操作

JSON server 還提供查詢條件以及排序...等等的操作。

但一般在實際使用上比較少會在 API 中使用這種查詢, 因此這邊用官網上範例帶過。

以下內容如官網，建議直接到官方說明觀看 

*PS. 1.0.0 以後版本與 0.7.14 版本有一些不同，原本是從 1.0.0 版本抓取範例，但這邊有刪減一些 0.7.14 不支援的*
### Conditions


* → \=\=
* lte → \<\=
* gte → >\=
* ne → !\=

<!-- * lt → < -->
<!-- * gt → > -->

```
GET /posts?views_gte=9000
```
<!-- ### Range

* start
* end
* limit

```
GET /posts?_start=10&_end=20
GET /posts?_start=10&_limit=10
``` -->

<!-- ### Paginate

* page
* per_page (default = 10)
  
```
GET /posts?_page=1&_per_page=25
``` -->

### Sort
* _sort=f1,f2
```
GET /posts?_sort=id,-views
```
<!-- ### Nested and array fields
* x.y.z...
* x.y.z[i]...
```
GET /foo?a.b=bar
GET /foo?x.y_lt=100
GET /foo?arr[0]=bar
```
### Embed
```
GET /posts?_embed=comments
GET /comments?_embed=post
``` -->

## 多重路徑

今天新增了一筆資料如下
```json
{
    // ... 略過
    "user": {
        "customer": [
            {
                "id": "1",
                "name": "Andy"
            }
        ]
    }
}
```

然後我想要拿到 user/cusomer 的資料，於是乎給出了

```
GET http://localhost:8000/user/customer
```

然後就可以取得了回應 ....... 

```
Not Found 
```

咦? 為什麼取不到 customer 內的資料呢?

這是因為 json server 只支援頂層路徑，也就是說 user 會變成路徑 /users 並且可以拿到

```json
{
    "customer": [
        {
            "id": "c_1",
            "name": "Andy"
        }
    ]
}
```

但 user 底下的 customer 卻不會成為路徑，如果需要修改這個問題可以建立一個 routes.json 檔案來指定路徑

```json
{
    "/user/customer": "/user"
}
```

重新啟動 json server 並加入 routes

```
json-server --watch -p 8000 db.json --routes routes.json
```

再次詢問 /user/customer 就會發現可以取得資料了!!!

*PS 目前 1.0.0 beta 版本不再支援 routes.json 引入*

## 建立一個 JS 檔案

在使用上，雖然指定一個 json 檔案 json server 就可以啟動。

但如果有一堆的 route 放在一個檔案內就會感覺過於龐大，此時想要拆成多個檔案管理時，就需要建立一個 js 檔案來將所有路徑做一個集合。

首先我們先將 user 從 db 中分離出來建立一個 user.json

```json
{
  "customer": [
    {
        "id": "c_1",
        "name": "Andy"
    }
  ]
}
```

```js
const jsonServer = require('json-server')
const server = jsonServer.create()
const routes = require("./routes/routes.json");
const dbRouter = jsonServer.router('db.json')
const userRouter = jsonServer.router('user.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Using routes.json 
// server.use(jsonServer.rewriter(routes));

server.get('/db', dbRouter);
server.get('/user', userRouter);

// Use default router
// server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

```

這樣我們就可以同時使用 db.json 以及 user.json。

並且使用 /db/* 跟 /user/cusotmer 分別進行訪問。

*1.0.0 beta 版本同樣不支援js檔案使用*