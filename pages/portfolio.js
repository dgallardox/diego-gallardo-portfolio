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

// export async function getStaticProps() {
//   const  data  = await client.query({
//       query: gql`
//         query getPostTitles {
//           posts {
//             nodes {
//               title
//             }
//           }
//         }
//         `,
//   });


//   return {
//     props: {
//       posts: data.posts.nodes,
//   }};
// }
