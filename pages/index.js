import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import React from 'react';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import Experiences from '../components/Experiences';
import ThemeSwitch from '../components/ThemeSwitch';

export default function Home() {
	const [darkMode, setDarkMode] = React.useState(false);

	function toggleDarkMode() {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	}
	return (
		<div className="bg-gray-950 flex flex-col min-h-screen min-w-full items-center ">
			<Head>
				<title>Serkan&apos;s Personal Website</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Hero />
			<Skills />
			<Experiences />
		</div>
	);
}
