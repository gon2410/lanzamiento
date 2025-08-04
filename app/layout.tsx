import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lanzamiento Dongfeng",
  description: "Inauguración del primer concesionario oficial Dongfeng en Argentina.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang="en">
			<body>
				<div className="mx-auto max-w-md">
					{children}
				</div>
			</body>
		</html>
	);
}
