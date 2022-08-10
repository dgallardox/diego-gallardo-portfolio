import { GetStaticProps } from "next";
import client from "../apollo/apollo-client";
import { aboutMePage } from "../apollo/quieries";
import Sanitizer from "../services/Sanitizer";
import Image from "next/image";

export default function About({ page }): JSX.Element {
  console.log(page);

  return (
    <>
      <div className="text-center pt-20">
        <div className="text-3xl font-bold">About Me</div>
        <Image
          src="/images/me.jpg"
          alt="me"
          width={300}
          height={400}
        />
        <Sanitizer dirtyHTML={page.content} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: aboutMePage,
  });

  return {
    props: {
      page: data.page
    },
  };
};
