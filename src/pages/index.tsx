import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import client from "../apollo/apollo-client";
import { getPostData } from "../apollo/quieries";
import Sanitizer from "../services/Sanitizer";
import { gql } from "@apollo/client";
import { useState } from "react";
import Hero from "../components/Hero";


export default function Home({ posts }) {
  // const [searchQuery, setSearchQuery] = useState("");

  // async function handleSearch(e) {
  //   e.preventDefault();
  //   const { data } = await client.query({
  //     query: gql`
  //       query search {
  //         posts(where: { search: "${searchQuery}" }) {
  //           nodes {
  //             title
  //             content
  //           }
  //         }
  //       }
  //     `,
  //   });
  //   console.log(data.posts.nodes);
  // }

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero />

      {/* <div className="pt-20 text-left pl-10 pr-10 pb-20">
        <div className="text-3xl font-bold font">All Posts</div>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            className="bg-slate-100"
            type="text"
            placeholder="Search.."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <div className="flex justify-between wrap w-100">
          {posts.map((post) => (
            <>
              <div className=" w-1/2 p-5 m-5 border-solid border-2 rounded-lg">
                <div className="font-bold" key={post.id}>
                  {post.title}
                </div>
                <Sanitizer dirtyHTML={post.content} />
              </div>
            </>
          ))}
        </div>
      </div> */}
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const { data } = await client.query({
//     query: getPostData,
//   });

//   return {
//     props: {
//       posts: data.posts.nodes,
//     },
//     revalidate: 300,
//   };
// };
