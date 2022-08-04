import Head from 'next/head'
import Image from 'next/image'
import DOMPurify from "isomorphic-dompurify";
import { GetStaticProps } from "next";
import client from "../api/apolloClient";
import { getPostData } from "../api/quieries";

export default function Home({ posts }): JSX.Element {
  
  function sanitizer(dirtyHTML: string): string {
    return DOMPurify.sanitize(dirtyHTML);
  }

  return (
    <>
      <div className="pt-20">
        <main className="text-center text-amber-50 bg-slate-600 pt-10 pb-10">
          <div className="text-6xl font-bold">Diego Gallardo</div>
          <div className="text-4xl pt-5">Portfolio</div>
        </main>
        <div className="pt-20 text-left pl-10 pr-10 pb-20">
          <div className="text-3xl font-bold font">All Posts</div>
          {posts.map((post) => (
            <>
              <div className="pt-5 mt-5 border-solid border-2 rounded-lg">
                <div className="font-bold" key={post.id}>
                  {post.title}
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: sanitizer(post.content) }}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: getPostData,
  });

  return {
    props: {
      posts: data.posts.nodes,
    },
  };
};