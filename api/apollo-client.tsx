import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  // credentials: "include",
  // fetchOptions: {
  //   mode: "no-cors",
  // },
});


const client = new ApolloClient({
  // ssrMode: true,
  cache: new InMemoryCache(),
  link,
});



// const httpLink = createHttpLink({
//   uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
// });

// const authLink = setContext((_, { headers }) => {
//   const token = process.env.NEXT_PUBLIC_GRAPHQL_TOKEN;
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

export default client;