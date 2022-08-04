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