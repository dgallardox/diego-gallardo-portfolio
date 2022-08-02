import { gql } from "@apollo/client";
import client from "../components/apolloClient";
import DOMPurify from "isomorphic-dompurify";

export default function Portfolio({ posts }) {
  console.log(posts);

  function sanitizer(postContent) {
    console.log(`sanitized: ${postContent}`)
    return DOMPurify.sanitize(postContent);
  }

  return (
    <>
      <div className="text-center">
        <div className="text-4xl font-bold">Blog</div>
        {posts.map((post) => (
          <>
            <div key={post.id}>{post.title}</div>
            <div
              dangerouslySetInnerHTML={{ __html: sanitizer(post.content) }}
            />
          </>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await client.query({
    query: gql`
      query getPostTitles {
        posts {
          nodes {
            id
            title
            content
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.data.posts.nodes,
    },
  };
}
