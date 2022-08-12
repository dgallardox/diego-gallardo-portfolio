import Header from "./Header";
import Footer from "./Footer";
import client from "../apollo/apollo-client";
import { ApolloProvider } from "@apollo/client";

export default function Layout({ children }) {
  const styles = {
    doc: "h-screen",
  };

  return (
    <>
      <ApolloProvider client={client}>
        <div className={styles.doc}>
          <Header />
          {children}
          <Footer />
        </div>
      </ApolloProvider>
    </>
  );
}
