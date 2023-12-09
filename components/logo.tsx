import Image from "next/image";

const Logo = () => {
	return (
		<div className="flex items-center">
			<Image
				src="/logo.png"
				alt="logo"
				className="block object-contain"
				height="220"
				width="220"
			/>
		</div>
	);
};

export default Logo;
