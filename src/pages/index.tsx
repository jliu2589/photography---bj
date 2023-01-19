import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "./Components/Navbar";

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
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>
          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
