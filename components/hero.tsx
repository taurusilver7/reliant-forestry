import { SelectedSection } from "@/types";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	setSection: (value: SelectedSection) => void;
};

const Hero = ({ setSection }: Props) => {
	return (
		<main className="h-screen">
			{/* <div className="absolute bottom-0 z-20 h-16 w-full bg-gradient-to-t from-slate-200 to-transparent transition duration-150" /> */}
			<div className="relative w-full h-screen justify-center flex items-center">
				<Image
					src="/hero.jpg"
					fill
					alt="hero-banner"
					priority
					className="object-cover"
				/>
				<div className="z-10 max-w-screen-lg px-4 lg:px-0">
					<div className="flex flex-col items-center gap-y-6 text-center p-6">
						<h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-8xl">
							Reliant Forestry
						</h1>
						<h3 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
							Cultivating Growth, Harvesting Success!
						</h3>

						<div className="flex text-neutral-100">
							<a
								href="mailto:sales@reliantforestry.com"
								className="-m-1.5 p-1.5 rounded-full border-2 py-2 px-4 text-neutral-200 hover:text-gray-800 ring-offset-gray-700 hover:bg-lime-300 ring-lime-500 border-lime-500 bg-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:-m-3 sm:text-base"
							>
								Get in touch
							</a>
						</div>
					</div>
				</div>

				<div className="absolute inset-x-0 bottom-6 flex justify-center">
					<AnchorLink
						href={`#${SelectedSection.ContactUs}`}
						className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2 hover:bg-emerald-700 hover:text-white"
					>
						<ChevronDown className="h-5 w-5 bg-transparent sm:h-8 sm:w-8" />
					</AnchorLink>
				</div>
			</div>
		</main>
	);
};

export default Hero;
