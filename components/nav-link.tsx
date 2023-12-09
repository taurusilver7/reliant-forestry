"use client";

import { SelectedSection } from "@/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	page: string;
	section: SelectedSection;
	setSection: (value: SelectedSection) => void;
};

const NavLink = ({ page, section, setSection }: Props) => {
	const lowerCase = page.toLowerCase().replace(/ /g, "") as SelectedSection;
	return (
		<AnchorLink
			href={`#${lowerCase}`}
			className={`${
				section === lowerCase && "text-lime-400"
			} transition duration-500 hover:text-lime-500`}
			onClick={() => setSection(lowerCase)}
		>
			{page}
		</AnchorLink>
	);
};

export default NavLink;
