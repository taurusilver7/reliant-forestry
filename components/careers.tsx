"use client";

import { SelectedSection } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	setSection: (value: SelectedSection) => void;
};

const Careers = ({ setSection }: Props) => {
	return (
		<section
			id="careers"
			className="flex items-center justify-between mx-auto w-5/6 md:my-3 py-20"
		>
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
						Explore with Us
						<br className="hidden lg:inline-block" />
					</h1>
					<p className="mb-8 leading-relaxed text-lg">
						Discover Opportunities That Shape Tomorrow. Join our team and
						grow with Reliant Forestry as we redefine the timber export
						industry.
					</p>
					<div className="flex justify-center">
						<a href="mailto:sales@reliantforestry.com">
							<Button className="inline-flex text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">
								Get in Touch
							</Button>
						</a>
						<AnchorLink
							className="font-bold underline"
							href={`#${SelectedSection.ContactUs}`}
						>
							<Button
								variant="outline"
								className="ml-4 inline-flex text-gray-700 bg-neutral-200 border-0 py-2 px-6 focus:outline-none hover:bg-neutral-300 rounded text-lg"
							>
								Leave a message
							</Button>
						</AnchorLink>
					</div>
				</div>
				<div className="relative lg:max-w-lg w-full saturate-100 hover:saturate-200">
					<Image
						className="object-cover rounded-lg"
						alt="hero"
						src="/careers.jpeg"
						width="500"
						height="500"
					/>
				</div>
			</div>
		</section>
	);
};

export default Careers;
