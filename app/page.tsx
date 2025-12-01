import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Սովորական Բիզնես / Անուն</title>
        <meta name="description" content="Պարզ, ժամանակակից, պրոֆեսիոնալ 1-էջանի վեբսայթ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <About />
        <Services />
        <Portfolio />
       
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
