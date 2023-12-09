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
  whitespace-normal bg-lime-100 text-center
  opacity-0 transition duration-500 hover:opacity-90`;
	return (
		<li className="relative mx-3 inline-block h-[380px] w-[400px]">
			<div className={overlayStyles}>
				<p className="text-2xl">{name}</p>
				<p className="mt-5">{description}</p>
			</div>
			<Image fill className="object-cover" src={image} alt={`${name}`} />
		</li>
	);
};

export default List;
