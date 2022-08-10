
export default function Portfolio(posts) {
  console.log(posts);

  return (
    <>
      <div className="text-center pt-20">
        <div className="text-3xl font-bold">Portfolio</div>
        <ul className="flex-1 flex mr-auto justify-around">
          <li className="hover:text-blue-800 hover:underline hover:underline-offset-4 decoration-solid">
            All
          </li>
          <li className="hover:text-blue-800 hover:underline hover:underline-offset-4 decoration-solid">
            Engineering
          </li>
          <li className="hover:text-blue-800 hover:underline hover:underline-offset-4 decoration-solid">
            Design
          </li>
        </ul>
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
