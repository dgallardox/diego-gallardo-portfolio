import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from "next";
import client from "../apollo/apollo-client";
import { getPostData } from "../apollo/quieries";
import Sanitizer from '../services/Sanitizer';
import { gql } from "@apollo/client";
import { useState } from "react";

export default function Home({ posts }) {
  const [searchQuery, setSearchQuery] = useState("");


  async function handleSearch(e) {
    e.preventDefault();
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
  
  return (
    <>
      <div className="pt-20">
        <main className="text-center text-amber-50 bg-slate-600 pt-10 pb-10">
          <div className="text-6xl font-bold">Diego Gallardo</div>
          <div className="text-4xl pt-5">Portfolio</div>
        </main>
        <div className="pt-20 text-left pl-10 pr-10 pb-20">
          <div className="text-3xl font-bold font">All Posts</div>
          <form onSubmit={(e) => handleSearch(e)}>
            <input
              className="bg-slate-100"
              type="text"
              placeholder="Search.."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
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