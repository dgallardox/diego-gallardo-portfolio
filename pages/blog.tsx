import { gql } from "@apollo/client";
import client from "../components/apolloClient";
import DOMPurify from "isomorphic-dompurify";
import { GetStaticProps } from "next";
import { NextPage } from 'next';

export default function Portfolio({ posts }): JSX.Element {

  function sanitizer(dirtyHTML: string): string {
    return DOMPurify.sanitize(dirtyHTML);
  }

  return (
    <>
      <div className="text-center pt-20">
        <div className="text-3xl font-bold font">Blog</div>
        {posts.map((post) => (
          <>
            <div className="pt-5">
              <div key={post.id}>{post.title}</div>
              <div
                dangerouslySetInnerHTML={{ __html: sanitizer(post.content) }}
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
