import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
	return (
		<div className="min-h-full flex flex-col">
			<Navbar />
				<Hero />
			<div className="flex flex-col items-center justify-center flex-1 gap-y-8 px-6 pt-10">
				<About />
			</div>
		</div>
	);
}
