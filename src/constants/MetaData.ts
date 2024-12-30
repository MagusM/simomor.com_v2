import { Metadata as MetadataType } from "next";

export const MetaData: MetadataType = {
	title: "SM Portfolio",
	description: "Simon Mor Portfolio V2 ",
	keywords: [
		"portfolio",
		"frontend developer",
		"web development",
		"React",
		"Next.js",
		"Framer Motion",
		"Tailwind"
	],
	authors: [{ name: "Simon Mor", url: "https://simonmor.com" }],
	openGraph: {
		title: "My Portfolio V2",
		description: "Simon Mor - Explore my work and projects.",
		url: "https://simonmor.com",
		siteName: "SM Portfolio",
		images: [
			{
				url: `https://simonmor.com/favicon.ico`,
				width: 1200,
				height: 630,
				alt: "My Portfolio OG Image"
			}
		],
		locale: "en_US",
		type: "website"
	},
	twitter: {
		card: "summary_large_image",
		site: "@SimonM",
		creator: "@SimonM",
		title: "SM Portfolio",
		description: "Explore my work and projects.",
		images: [`https://simonmor.com/favicon.svg`]
	},
	icons: {
		icon: [
			{ url: "/favicon.ico", type: "image/x-icon" },
			{ url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
			{ url: "/favicon.svg", type: "image/svg+xml" }
		],
		apple: "/apple-touch-icon.png",
		other: [
			{ rel: "manifest", url: "/site.webmanifest" },
			{ rel: "icon", url: "/web-app-manifest-192x192.png", sizes: "192x192" },
			{ rel: "icon", url: "/web-app-manifest-512x512.png", sizes: "512x512" }
		]
	}
};
