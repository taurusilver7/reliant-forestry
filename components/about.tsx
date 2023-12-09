"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { SelectedSection } from "@/types";
import NavLink from "./nav-link";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	setSection: (value: SelectedSection) => void;
};

const About = ({ setSection }: Props) => {
	return (
		<section
			id="aboutus"
			className="flex flex-col items-center justify-between mx-auto w-5/6 md:mb-10 py-20"
		>
			<div className="flex flex-col lg:flex-row items-center gap-8">
				<div className="relative justify-center lg:flex-1 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px] saturate-0 hover:saturate-150 transition-all duration-300">
					<div className="flex hover:shadow-md border-4 border-orange-500">
						<Image
							src="/truck.jpg"
							alt="about"
							className="object-cover"
							fill
						/>
					</div>
				</div>

				<div className="flex flex-col items-start lg:w-[50%]">
					<div className="relative w-full ">
						<div className="px-2">
							<h1 className="basis-3/5 text-3xl font-bold">
								Reliant Forestry
							</h1>
							<p className="my-5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Molestias mollitia velit optio inventore sequi dolor
								facilis nostrum, perferendis labore atque ab sint, qui
								cupiditate quidem sapiente rerum obcaecati? Minima,
								magni?
							</p>
							<p className="mb-5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dicta sunt labore, molestiae aperiam delectus
								blanditiis, commodi sequi nihil harum neque quia ex
								repellendus iste velit ipsam, inventore maxime autem!
								Repellat!
							</p>
						</div>
					</div>

					<div className="p-2">
						<AnchorLink
							className="text-sm font-bold text-lime-400 underline"
							href={`#${SelectedSection.ContactUs}`}
						>
							<Button>Get in Touch</Button>
						</AnchorLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
