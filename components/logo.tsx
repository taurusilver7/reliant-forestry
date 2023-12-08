import Image from "next/image";

const Logo = () => {
	return (
		<div className="hidden md:flex items-center gap-x-2">
			<Image
				src="/logo.png"
				alt="logo"
				className="block"
				height="250"
				width="250"
			/>
		</div>
	);
};

export default Logo;
