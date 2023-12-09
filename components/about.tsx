"use client";

import Image from "next/image";
import { Button } from "./ui/button";

const About = () => {
	return (
		<section
			id="about-us"
			className="flex flex-col items-center justify-between mx-auto w-5/6 mb-10"
		>
			<div className="flex flex-col lg:flex-row items-center gap-8">
				<div className="relative justify-center lg:flex-1 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
					<Image
						src="/truck.jpg"
						alt="about"
						className="object-cover"
						fill
					/>
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
						<Button>Get in touch</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
