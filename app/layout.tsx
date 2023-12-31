import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Reliant Forestry",
	description: "Cultivating Growth, Harvesting Success!",
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
			<body className={cn(inter.className, "h-full bg-slate-200")}>
				{children}
			</body>
		</html>
	);
}
