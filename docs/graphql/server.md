Sever Dependences 

* apollo-server
* apollo-server-express
* graphql
* express
* nodemon

```js
const { graphql, buildSchema } = require('graphql');
const express = require('express');

const { ApolloServer } = require('apollo-server');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var rootValue = { hello: () => 'Hello world!' };

var source = '{ hello }';

// const typeDefs = `
//   type Query {
//     totalPhotos: Int!
//   }
// `;

// const resolvers = {
//     Query: {
//       totalPhotos: () => 42
//     }
// }

graphql({ schema, source, rootValue }).then((response) => {
  console.log(response);
});
```