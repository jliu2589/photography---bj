import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hero from "../Components/Hero";
import Form from "../Components/Form";
import TestForm from "../Components/Testform";
import Layout from "../Components/Layout";
import AboutUs from "../Components/AboutUs";

import { api } from "../utils/api";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BJ Photography</title>
        <meta name="description" content="GTA Event and Wedding Photography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col items-center">
          <Hero />
          <AboutUs />
          <Form />
        </main>
      </Layout>
    </>
  );
};

export default Home;
