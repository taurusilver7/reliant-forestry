"use client";

import Image from "next/image";
import React from "react";

const Gallery = () => {
	return (
		<div id="gallery" className="mt-4 pt-20 w-full flex flex-col">
			<div className="relative mx-4">
				<div className="flex flex-col md:w-3/5 mx-auto justify-center items-center">
					<h1 className="basis-3/5 text-3xl font-bold text-center">
						Our Gallery of Excellence
					</h1>
					<p className="my-5 text-lg">
						Explore our gallery showcasing the journey from forest to
						global export.
						<br />
						Witness the beauty of sustainable forestry, craftsmanship, and
						premium products in captivating images.
					</p>
				</div>

				<div className="md:grid md:grid-cols-3 flex flex-col gap-6 mt-8 w-full">
					<div className="relative hidden lg:inline row-span-2">
						{/* Section -1 : 5 gallery images */}
						<Image
							src="/gallery-1.jpeg"
							alt="gallery-1"
							fill
							className="gallery-image"
							loading="lazy"
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/gallery-2.jpg"
							alt="gallery-2"
							fill
							className="gallery-image"
							loading="lazy"
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/gallery-3.jpeg"
							alt="gallery"
							className="gallery-image"
							fill
							loading="lazy"
						/>
					</div>
					<div className="lg:hidden relative h-80">
						<Image
							src="/gallery-4.jpg"
							alt="gallery"
							className="gallery-image"
							fill
							loading="lazy"
						/>
					</div>

					<div className="relative h-80 lg:h-96 col-span-2">
						<Image
							src="/gallery-5.jpeg"
							alt="gallery"
							fill
							className="gallery-image"
							loading="lazy"
						/>
					</div>

					{/* Section - 2 : 3 gallery images */}

					<div className="relative h-80">
						<Image
							src="/gallery-6.jpg"
							alt="gallery-6"
							fill
							className="gallery-image"
							loading="lazy"
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/gallery-8.jpg"
							alt="gallery-7"
							fill
							loading="lazy"
							className="gallery-image"
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/gallery-7.jpg"
							alt="gallery-8"
							fill
							className="gallery-image"
							loading="lazy"
						/>
					</div>

					{/* Section -3 : 4 gallery images */}

					<div className="relative h-80">
						<Image
							src="/gallery-9.jpg"
							alt="gallery-9"
							loading="lazy"
							className="gallery-image"
							fill
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/gallery-10.jpeg"
							alt="gallery-10"
							fill
							loading="lazy"
							className="gallery-image"
						/>
					</div>
					<div className="relative hidden lg:inline row-span-2">
						<Image
							src="/gallery-11.jpeg"
							alt="gallery"
							fill
							className="gallery-image"
							loading="lazy"
						/>
					</div>
					<div className="relative col-span-2 h-80">
						<Image
							src="/gallery-12.jpeg"
							alt="gallery"
							fill
							className="gallery-image"
							loading="lazy"
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/gallery-13.jpeg"
							alt="gallery-13"
							fill
							className="gallery-image"
							loading="lazy"
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/gallery-15.jpg"
							alt="gallery-15"
							fill
							className="gallery-image"
							loading="lazy"
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/gallery-14.jpg"
							alt="gallery-14"
							fill
							className="gallery-image"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
