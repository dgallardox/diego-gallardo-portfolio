import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";


const Httplink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: Httplink,
});


export default client;