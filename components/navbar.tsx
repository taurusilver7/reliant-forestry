"use client";
import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const menu = [
	{
		name: "Home",
	},
	{
		name: "About Us",
	},
	{
		name: "Business Areas",
	},
	{
		name: "Contact Us",
	},
];

const Navbar = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const abvMedScrn = useMediaQuery("(min-width: 1080px)");
	return (
		<nav>
			<div className="z-50 backdrop-blur justify-between fixed top-0 flex items-center w-full p-5">
				{/* left */}
				<Logo />

				{/* Right side + Desktop */}
				{abvMedScrn ? (
					<div className="flex md:ml-auto justify-between md:justify-end w-full items-center gap-x-2">
						<div className="flex items-center justify-between gap-8 text-neutral-200">
							{menu.map(({ name }) => (
								<Link href="/" scroll={false}>
									{name}
								</Link>
							))}
						</div>
					</div>
				) : (
					<Button
						variant="outline"
						className="rounded-full p-2 bg-lime-600"
						onClick={() => setToggle(true)}
					>
						<Menu className="h-6 w-6 text-white" />
					</Button>
				)}
			</div>

			{/* mobile & tablet Menu */}
			{!abvMedScrn && toggle && (
				<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-lime-100 drop-shadow-xl">
					<div className="flex justify-end p-12">
						{/* Close button */}
						<Button
							onClick={() => setToggle(false)}
							variant="outline"
							className="rounded-full bg-lime-600"
						>
							<X className="h-6 w-6 text-neutral-100" />
						</Button>
					</div>

					{/* Menu Items */}
					<div
						className="
ml-[33%]
                
                "
					></div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
