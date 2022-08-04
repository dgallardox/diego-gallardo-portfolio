import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  credentials: "include",
  fetchOptions: {
    mode: "no-cors",
  },
});


const client = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  link,
});

export default client;