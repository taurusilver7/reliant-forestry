"use client";

import { SelectedSection } from "@/types";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";

type Props = {
	setSection: (value: SelectedSection) => void;
};

const Contact = ({ setSection }: Props) => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};
	return (
		<div id="contactus" className="mb-5 w-5/6 mx-auto pt-24 pb-32">
			<div className="mx-auto md:w-3/5">
				<h1 className="basis-3/5 text-3xl font-bold text-center">
					Get in Touch!
				</h1>
				<p className="my-5 text-lg">
					Whether you seek premium timber, solutions, partnership inquiries
					<br />
					Reach out to Reliant Forestry. Let&apos;s build a sustainable
					future together.
				</p>
			</div>

			{/* Form + Address */}
			<div className="mt-10 justify-between w-auto gap-8 md:flex">
				{/* address */}
				<div className="flex flex-col gap-2">
					<h4 className="font-bold text-3xl md:text-4xl">
						Reliant Forestry
					</h4>
					<p className="uppercase underline font-bold">Address:</p>
					<div className="flex flex-col text-xl items-start justify-center">
						<p className="font-medium">Reliant Forestry</p>
						<p>125, Hawthorne landing dr</p>
						<p>Goose Creek</p>
						<p>South Carolina, USA - 29455</p>
						<br />
						<p>sales@reliantforestry.com</p>
						<p>+1 (662) 408-7347</p>
					</div>
				</div>

				<div className="mt-10 basis-3/5 md:mt-0 border border-lime-400 p-4 rounded-lg">
					<form
						target="_blank"
						onSubmit={onSubmit}
						method="POST"
						action="https://formsubmit.co/sales@reliantforestry.com"
					>
						<Input
							type="text"
							placeholder="Name"
							className="text-lg p-2 placeholder-lime-400 focus:outline-none"
							{...register("name", {
								required: true,
								maxLength: 50,
							})}
						/>
						{errors.name && (
							<p className="mt-1 text-sm text-red-500">
								{errors.name.type === "required" &&
									"This field is required!"}
								{errors.name.type === "maxLength" &&
									"Max length is only 50 char(s)"}
							</p>
						)}
						<Input
							type="email"
							placeholder="Email address"
							className="text-lg p-2 mt-5"
							{...register("email", {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
						/>
						{errors.email && (
							<p className="mt-1 text-sm text-red-500">
								{errors.email.type === "required" &&
									"This field is required!"}
								{errors.email.type === "pattern" &&
									"Invalid email address"}
							</p>
						)}

						<div className="mt-5">
							<Textarea
								placeholder="Type your message here."
								className="text-lg"
								{...register("message", {
									required: true,
									maxLength: 2000,
								})}
							/>
							<p className="text-sm p-1 text-muted-foreground">
								Your message will be copied to the support team.
							</p>
							{errors.message && (
								<p className="text-red-500 text-sm">
									{errors.message.type === "required" &&
										"This field is required!"}
									{errors.message.type === "maxLength" &&
										"Max length is 2000 char(s)"}
								</p>
							)}
						</div>

						<Button
							type="submit"
							variant="link"
							className="bg-emerald-400 px-4 mt-2"
						>
							SUBMIT
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
