import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<main className="flex">
			<div className="relative w-full justify-center flex items-center h-screen">
				<Image
					src="/hero.jpeg"
					layout="fill"
					alt="hero"
					priority
					objectFit="cover"
				/>
				<div className="z-10 max-w-screen-lg px-4 lg:px-0">
					<div className="flex flex-col items-center gap-y-6 text-center p-6">
						<h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
							Reliant Forestry
						</h1>
						<h3 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
							International trade at your doorstep
						</h3>

						<div className="flex text-neutral-100">
							<a
								href="/"
								className="-m-1.5 p-1.5 rounded-full border-2 py-2 px-4 text-white ring-offset-gray-700 hover:bg-gray-800/90 ring-orange-500 border-orange-500 bg-none transition-all duration-300  focus:outline-none focus:ring-2 focus:ring-offset-2 sm:-m-3 sm:text-base"
							>
								Get in touch
							</a>
						</div>
					</div>
				</div>

				<div className="absolute inset-x-0 bottom-6 flex justify-center">
					<Link
						href="/"
						className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2 hover:bg-emerald-700 hover:text-white"
					>
						<ChevronDown className="h-5 w-5 bg-transparent sm:h-8 sm:w-8" />
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Hero;
