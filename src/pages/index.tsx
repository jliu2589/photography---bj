import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hero from "../Components/Hero";
import Form from "../Components/Form";
import TestForm from "../Components/Testform";
import Layout from "../Components/Layout";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from your momma" });

  return (
    <>
      <Head>
        <title>BJ Photography</title>
        <meta name="description" content="GTA Event and Wedding Photography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <Hero />
          <div className="my-4">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
          </div>
          <Form />
        </main>
      </Layout>
    </>
  );
};

export default Home;
