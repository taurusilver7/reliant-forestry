"use client";
import Link from "next/link";
import Logo from "./logo";
import NavLink from "./nav-link";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SelectedSection } from "@/types";

type Props = {
	topPage: boolean;
	section: SelectedSection;
	setSection: (value: SelectedSection) => void;
};

const menu = [
	{
		name: "Home",
		url: "#home",
	},
	{
		name: "About Us",
		url: "#about-us",
	},
	{
		name: "Business Areas",
		url: "#business-areas",
	},
	{
		name: "Contact Us",
		url: "#contact-us",
	},
];

const Navbar = ({ topPage, section, setSection }: Props) => {
	const [toggle, setToggle] = useState<boolean>(false);
	const abvMedScrn = useMediaQuery("(min-width: 1080px)");

	const background = topPage ? "backdrop-blur" : "bg-gray-800 drop-shadow";
	return (
		<nav id="home">
			<div
				className={`${background} z-50 fixed top-0 flex justify-between items-center w-full p-1 px-6 py-4 mb-2`}
			>
				{/* left */}
				<Logo type={false} />

				{/* Right side + Desktop */}
				{abvMedScrn ? (
					<div className="flex md:ml-auto justify-between md:justify-end w-full items-center gap-x-2">
						<div className="flex items-center justify-between gap-8 text-lg text-neutral-200">
							<NavLink
								page="Home"
								section={section}
								setSection={setSection}
							/>
							<NavLink
								page="About Us"
								section={section}
								setSection={setSection}
							/>
							<NavLink
								page="Business Areas"
								section={section}
								setSection={setSection}
							/>
							<NavLink
								page="Contact Us"
								section={section}
								setSection={setSection}
							/>
						</div>
					</div>
				) : (
					<Button
						className="rounded-full p-2  bg-lime-500 hover:bg-lime-600"
						onClick={() => setToggle(true)}
					>
						<Menu className="h-6 w-6 text-neutral-200/80" />
					</Button>
				)}
			</div>

			{/* mobile & tablet Menu */}
			{!abvMedScrn && toggle && (
				<div className="fixed right-0 bottom-0 z-50 h-full w-[300px] bg-lime-50 drop-shadow-xl">
					<div className="flex justify-end p-10">
						{/* Close button */}
						<Button
							onClick={() => setToggle(false)}
							className="rounded-full p-2 bg-lime-500 hover:bg-lime-600"
						>
							<X className="h-6 w-6 text-neutral-200/90" />
						</Button>
					</div>

					{/* Menu Items */}
					<div className="ml-[33%] flex flex-col gap-10 text-2xl">
						{/* {menu.map(({ name, url }) => (
							<Link href={url}>{name}</Link>
						))} */}

						<NavLink
							page="Home"
							section={section}
							setSection={setSection}
						/>
						<NavLink
							page="About Us"
							section={section}
							setSection={setSection}
						/>
						<NavLink
							page="Business Areas"
							section={section}
							setSection={setSection}
						/>
						<NavLink
							page="Contact Us"
							section={section}
							setSection={setSection}
						/>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
