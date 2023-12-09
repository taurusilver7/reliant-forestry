import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
	type?: boolean;
};

const Logo = ({ type }: LogoProps) => {
	return (
		<div className="flex items-center">
			<Image
				src="/logo-dark.png"
				alt="logo"
				className={cn(" hidden object-contain", type && "block")}
				height="250"
				width="250"
			/>

			<Image
				src="/logo.png"
				alt="logo"
				className={cn("object-contain", type && "hidden")}
				height="220"
				width="220"
			/>
		</div>
	);
};

export default Logo;
