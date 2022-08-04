import Navigation from "./Navigation";
import Footer from "./Footer";
import client from "../api/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function Layout({ children }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Navigation />
        {children}
        <Footer />
      </ApolloProvider>
    </>
  );
}
