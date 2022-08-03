
export default function Portfolio(posts) {
  console.log(posts);

  return (
    <>
      <div className="text-center pt-20">
        <div className="text-3xl font-bold">Portfolio</div>
      </div>
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
