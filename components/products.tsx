"use client";

import { ProductType, SelectedSection } from "@/types";
import List from "./list";

const products: Array<ProductType> = [
	{
		name: "Southern Yellow Pine",
		description:
			"Premiere supplier of Export-quality Southern Yellow Pine logs. #1 in South-East United States.",
		image: "/product-1.png",
	},
	{
		name: "Eastern White Pine",
		description:
			"Meticulously sourced and crafted Eastern White Pine of Timeless allure and finest Craftmanship.",
		image: "/product-2.jpeg",
	},
	{
		name: "Classic Red Oak",
		description:
			"Elevate you Project to new heights of excellence and quality with rich Hues of the Classic Red Oaks.",
		image: "/product-3.jpg",
	},
	{
		name: "Logistics",
		description:
			"Providing International Timber processing, treatment, quality control, along with logistics and shipping assistance.",
		image: "/product-4.jpeg",
	},
];

type Props = {
	setSection: (value: SelectedSection) => void;
};

const Products = ({ setSection }: Props) => {
	return (
		<section id="businessareas" className="py-28 w-full">
			<div className="mx-auto md:w-3/5">
				<h1 className="basis-3/5 text-3xl font-bold text-center">
					Nature&apos;s Finest Selection
				</h1>
				<p className="py-5 text-lg">
					Explore our array of exquisite timber, offerings meticulously
					sourced and crafted. Each product in our repository epitomize
					quality, reliability, and sustainability.
					<br /> Each piece tells a story of nature's finest craftsmanship,
					ready to elevate your projects to new heights of excellence.
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
