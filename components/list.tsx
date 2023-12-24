"use client";

import Image from "next/image";

type Props = {
	name: string;
	description?: string;
	image: string;
};

const List = ({ name, description, image }: Props) => {
	const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[400px] flex-col items-center justify-center
  whitespace-normal bg-lime-100 text-center rounded-lg 
  opacity-0 transition duration-500 hover:opacity-90`;
	return (
		<li className="relative mx-3 inline-block h-[380px] w-[400px] cursor-pointer">
			<div className={overlayStyles}>
				<p className="text-2xl font-bold">{name}</p>
				<p className="mt-5 text-lg font-semibold">{description}</p>
			</div>
			<Image
				fill
				className="object-cover rounded-lg mb-2"
				src={image}
				alt={`${name}`}
				loading="lazy"
			/>
		</li>
	);
};

export default List;
