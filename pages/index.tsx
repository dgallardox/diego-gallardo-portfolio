import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from "next";
import client from "../api/apollo-client";normalizeReadFieldOptions
import { getPostData } from "../api/quieries";
import { normalizeReadFieldOptions } from '@apollo/client/cache/inmemory/policies';
import sanitizer from '../servcies/Sanitizer';
import Sanitizer from '../servcies/Sanitizer';

export default function Home({ posts }): JSX.Element {

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
                <Sanitizer dirtyHTML={post.content} />
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