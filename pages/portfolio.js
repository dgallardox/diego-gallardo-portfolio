import { gql } from "@apollo/client";
import client from "../components/apolloClient";

export default function Portfolio(posts) {
  console.log(posts);

  return (
    <>
      <div className="text-center">Portfolio</div>
    </>
  );
}

export async function getStaticProps() {
  const { loading, error, data } = await client.query({
      query: gql`
        query getPostTitles {
          posts {
            nodes {
              title
            }
          }
        }
        `,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return {
    props: {
      posts: data.posts.nodes,
  }};
}
