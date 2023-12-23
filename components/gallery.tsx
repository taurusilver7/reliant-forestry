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
						<Image
							src="/timber-6.jpeg"
							alt="gallery"
							fill
							className="gallery-image"
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/timber-12.jpg"
							alt="gallery"
							fill
							className="gallery-image"
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/timber-12.jpeg"
							alt="gallery"
							className="gallery-image"
							fill
						/>
					</div>
					<div className="lg:hidden relative h-80">
						<Image
							src="/timber-12.jpeg"
							alt="gallery"
							className="gallery-image"
							fill
						/>
					</div>
					<div className="relative h-80 lg:h-96 col-span-2">
						<Image
							src="/timber-10.jpeg"
							alt="gallery"
							fill
							className="gallery-image"
						/>
					</div>

					<div className="relative h-80">
						<Image
							src="/timber-14.jpg"
							alt="gallery"
							className="gallery-image"
							fill
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/timber-8.jpeg"
							alt="gallery"
							fill
							className="gallery-image"
						/>
					</div>
					<div className="relative hidden lg:inline row-span-2">
						<Image
							src="/timber-7.jpeg"
							alt="gallery"
							fill
							className="gallery-image"
						/>
					</div>
					<div className="relative col-span-2 h-80">
						<Image
							src="/timber-4.jpeg"
							alt="gallery"
							fill
							className="gallery-image"
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/timber-9.jpeg"
							alt="gallery"
							fill
							className="gallery-image"
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/timber-0.jpg"
							alt="gallery"
							fill
							className="gallery-image"
						/>
					</div>
					<div className="relative h-80">
						<Image
							src="/truck.jpg"
							alt="gallery"
							fill
							className="gallery-image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
