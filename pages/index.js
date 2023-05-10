import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Experiences from "../components/Experiences";

export default function Home() {
  return (
    <div className="bg-gray-950 flex flex-col min-h-screen min-w-full items-center ">
      <Head>
        <title>Serkan&apos;s Personal Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Skills />
      <Experiences/>

      <div
        id="resume"
        className="flex flex-col flex-grow custom-h align-middle  justify-between border-red-400 border-2 w-full md:w-2/3 mx-auto"
      ></div>
    </div>
  );
}
