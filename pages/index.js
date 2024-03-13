import Head from "next/head";
import Header from "../components/Header/Header";
import React from "react";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Experiences from "../components/Experiences";
import { useTheme } from "../context/Theme";
import Education from "../components/Education";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <div id="main" className={` ${isDark ? "dark" : "light"} main `}>
      <Head>
        <title>Serkan Nemli</title>
        <meta name="description" content="Serkan Nemli's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Skills />
      <Experiences />
      <Education />
    </div>
  );
}
