import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/products";

export default function Home() {
	return (
		<div className="min-h-full flex flex-col">
			<Navbar />
				<Hero />
			<div className="flex flex-col items-center justify-center gap-y-8 px-6 py-16">
				<About />
        <Products />
			</div>
		</div>
	);
}
