"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import { SelectedSection } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
	const [selectedSection, setSelectedSection] = useState<SelectedSection>(
		SelectedSection.Home
	);
	const [top, setTop] = useState<boolean>(true);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setTop(true);
				setSelectedSection(SelectedSection.Home);
			}
			if (window.scrollY !== 0) setTop(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-full flex flex-col">
			<Navbar
				topPage={top}
				section={selectedSection}
				setSection={setSelectedSection}
			/>
			<Hero setSection={setSelectedSection} />
			<div className="flex flex-col items-center justify-center gap-y-8 px-6 mt-28">
				<About setSection={setSelectedSection} />
				<Products setSection={setSelectedSection} />
				<Contact setSection={setSelectedSection} />
				<Footer />
			</div>
		</div>
	);
}
