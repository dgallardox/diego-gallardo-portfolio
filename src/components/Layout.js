import Header from "./Header";
import Footer from "./Footer";
import client from "../apollo/apollo-client";
import { ApolloProvider } from "@apollo/client";

export default function Layout({ children }) {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="border-rose-600 border-solid border-2 h-screen relative">
            <Header />
          {children}
          <Footer />
        </div>
      </ApolloProvider>
    </>
  );
}
