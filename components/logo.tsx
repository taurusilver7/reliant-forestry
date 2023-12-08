import Image from "next/image";

const Logo = () => {
	return (
		<div className="flex items-center gap-x-2">
			<Image
				src="/logo.png"
				alt="logo"
				className="block object-contain"
				height="260"
				width="260"
			/>
		</div>
	);
};

export default Logo;
