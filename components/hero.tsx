import Image from "next/image";

const Hero = () => {
	return (
		<main className="">
			<div className="relative w-full justify-center flex items-center h-screen">
				<Image
					src="/hero.jpeg"
					layout="fill"
					alt="hero"
					priority
					objectFit="cover"
				/>
            <div className="z-10 max-w-screen-lg px-4 lg:px-0">
               <div className="flex flex-col items-center gap-y-6 text-center p-6">
                  <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">Reliant Forestry</h1>
               </div>
            </div>
			</div>
		</main>
	);
};

export default Hero;
