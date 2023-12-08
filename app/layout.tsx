import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair, Ubuntu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair({ subsets: ["latin"] });
const ubuntu = Ubuntu({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
	title: "Reliant Forestry",
	description: "Generated by create next app",
	icons: {
		icon: [
			{
				href: "icon.png",
				url: "icon.png",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			style={{ scrollBehavior: "smooth" }}
			suppressHydrationWarning
		>
			<body className={cn(ubuntu.className, "h-full")}>{children}</body>
		</html>
	);
}