import { gql } from "@apollo/client";

export const getPostData = gql`
  query getPostTitles {
    posts {
      nodes {
        id
        title
        content
        slug
      }
    }
  }
`;

export const aboutMePage = gql`
  query getAboutMePage {
    page(id: "cG9zdDoxMA==") {
      title
      content
    }
  }
`;

export const searchQuery = ( keyword ) => gql`
  query search {
    posts(where: { search: "hello" }) {
      nodes {
        title
      }
    }
  }
`;
