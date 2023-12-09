"use client";

import { ProductType, SelectedSection } from "@/types";
import List from "./list";

const products: Array<ProductType> = [
	{
		name: "Weight Training Classes",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: "/forestry.png",
	},
	{
		name: "Yoga Classes",
		description: "Lorem ipsum dolor sit amet",
		image: "/hero.jpeg",
	},
	{
		name: "Weight Training Classes",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: "/forestry.png",
	},
];

type Props = {
	setSection: (value: SelectedSection) => void;
};

const Products = ({setSection}: Props) => {
	return (
		<section id="businessareas" className="py-28 w-full">
			<div className="mx-auto md:w-3/5">
				<h1 className="basis-3/5 text-3xl font-bold text-center">
					Our Products
				</h1>
				<p className="py-5 text-lg">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
					sed tempora fugit qui quam reprehenderit impedit ipsum? Quae,
					quas veritatis tempore cum, molestias consequuntur numquam
					aperiam voluptate, vero facere corporis?
				</p>
			</div>

			<div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden no-scrollbar">
				<ul className="w-full whitespace-nowrap justify-between">
					{products.map(
						({ name, description, image }: ProductType, index) => (
							<List
								key={index}
								name={name}
								image={image}
								description={description}
							/>
						)
					)}
				</ul>
			</div>
		</section>
	);
};

export default Products;
