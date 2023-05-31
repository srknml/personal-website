import Head from "next/head";
import Header from "../components/Header/Header";
import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Experiences from "../components/Experiences";
import { useTheme } from "../context/Theme";
import Carousel from "../components/Carousel";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <div
      id="main"
      className={` ${
        isDark ? "dark" : "light"
      } flex flex-col min-h-screen min-w-full items-center`}
    >
      <Head>
        <title>Serkan Nemli</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Skills />
      <Experiences />
    </div>
  );
}
