export default async function Search() {

  const { data } = await client.query({
    query: gql`
        query search {
          posts(where: { search: "${searchQuery}" }) {
            nodes {
              title
              content
            }
          }
        }
      `,
  });
  console.log(data.posts.nodes);
}
