"use client";

import { SelectedSection } from "@/types";

type Props = {
	setSection: (value: SelectedSection) => void;
};

const Contact = ({setSection}: Props) => {
	return (
		<div id="contactus" className="mb-5 w-5/6 mx-auto pt-24 pb-32">
			<div className="mx-auto md:w-3/5">
				<h1 className="basis-3/5 text-3xl font-bold text-center">
					Get in Touch
				</h1>
				<p className="my-5 text-lg">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
					sed tempora fugit qui quam reprehenderit impedit ipsum? Quae,
					quas veritatis tempore cum, molestias consequuntur numquam
					aperiam voluptate, vero facere corporis?
				</p>
			</div>

			{/* Form + Address */}
			<div className="mt-10 justify-between w-auto gap-8 md:flex">
				{/* address */}
				<div className="flex flex-col gap-2">
					<h4 className="font-bold text-3xl md:text-4xl py-1">
						Reliant Forestry
					</h4>
					<p className="uppercase underline font-bold">Address:</p>
					<div className="flex flex-col text-xl items-start justify-center">
						<p className="font-medium">Reliant Forestry</p>
						<p>211 Satoriway unit-305</p>
						<p>John&apos;s Island</p>
						<p>South Carolina, USA - 29455</p>
					</div>
				</div>

				<div className="mt-10 basis-3/5 md:mt-0">
					<form>
						input form
						<input type="text" className="" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
