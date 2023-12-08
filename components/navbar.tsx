import Link from "next/link";
import Logo from "./logo";

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
	return (
		<div className="z-50 bg-background fixed top-0 flex items-center w-full p-5">
			<Logo />

			<div className="flex md:ml-auto justify-end w-full items-center gap-x-2">
				<div className="flex items-center justify-between gap-8">
					{menu.map(({ name }) => (
						<Link href="/" scroll={false}>
							{name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
