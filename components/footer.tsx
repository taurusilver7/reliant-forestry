"use client";

import { SelectedSection } from "@/types";
import Logo from "./logo";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
	return (
		<div className="bg-lime-100/20 py-16 mx-auto w-full">
			<div className="justify-between items-start max-md:text-center gap-10 md:flex">
				<div className="mt-16 basis-1/3 md:mt-0">
					<Logo type={true} />
					<p className="my-5">
						Premiere supplier of export-quality timber wood.
					</p>
				</div>

				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className="font-semibold">Products</h4>
					<p className="mt-2">Southern Yellow Pine</p>
					<p className="my-2">Eastern White Pine</p>
					<p className="my-2">Pristine White Oak</p>
					<p className="my-2">Classic Red Oak</p>
					<p className="my-2">North-American Hardware Lumber</p>
				</div>

				<div className="mt-16 basis-1/4 md:mt-0 text-lg">
					<h4 className="font-bold">Exporting Locations</h4>
					<p className="mt-2">UAE</p>
					<p>Australia</p>
					<p>Singapore</p>
					<p>India</p>
					<p>Karachi (Pakistan)</p>
					<p>Thailand</p>
				</div>

				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className="font-semibold">Links</h4>

					<AnchorLink
						className="my-2"
						href={`#${SelectedSection.AboutUs}`}
					>
						About Us
					</AnchorLink>
					<p className="my-2">Customer Service</p>
					<p>Contact Us</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
