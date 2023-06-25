Client Dependences

* @apollo/client

```js
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery} from '@apollo/client';

const create = () => {

}

const query = ({queryAPI}) => {    
       
      
}
const mutation = () => {}


const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

```