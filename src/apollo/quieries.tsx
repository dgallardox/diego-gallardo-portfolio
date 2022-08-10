import { gql } from "@apollo/client";

export const getPostData = gql`
  query getPostTitles {
    posts {
      nodes {
        id
        title
        content
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
