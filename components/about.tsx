"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { SelectedSection } from "@/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	setSection: (value: SelectedSection) => void;
};

const About = ({ setSection }: Props) => {
	return (
		<section
			id="aboutus"
			className="flex flex-col items-center justify-between mx-auto w-5/6 md:my-3 py-28"
		>
			<div className="flex flex-col lg:flex-row items-center gap-8">
				<div className="relative justify-center lg:flex-1 w-[300px] h-[450px] sm:w-[400px] sm:h-[500px]  saturate-100 hover:saturate-200 transition-all duration-300">
					<Image
						src="/about.jpeg"
						alt="about"
						className="object-cover rounded-lg"
						fill
					/>
				</div>

				<div className="flex flex-col items-start lg:w-[50%] px-4 md:pl-12">
					<div className="relative w-full ">
						<div className="px-2">
							<h1 className="basis-3/5 text-3xl font-bold">
								Reliant Forestry
							</h1>
							<p className="my-5 text-lg">
								Welcome to Reliant Forestry, a promising player in the
								international timber exports. This burgeoning enterprise
								mirrors the ambitious beginnings of industry-leading
								exporters. With a strong presence in South Carolina, we
								are committed to delivering high-quality timber products
								to our global clients.
								<br />
								<br />
								Founded by visionary entrepreneurs deeply rooted in the
								trade, our expertise, dedication to sustainability, and
								unwavering commitment to customer satisfaction set us
								apart in the market. We take pride in our ability to
								meet the diverse needs of our clients while upholding
								the highest standards of quality and integrity.
								
							</p>
							<p className="mb-5"></p>
						</div>
					</div>

					<div className="p-2">
						<AnchorLink
							className=""
							href={`#${SelectedSection.ContactUs}`}
						>
							<Button
								variant="outline"
								className="inline-flex text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg"
							>
								Get in Touch
							</Button>
						</AnchorLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
