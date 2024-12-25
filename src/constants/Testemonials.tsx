import { StaticImageData } from "next/image";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

export type Testimonials = {
	name: string;
	position: string;
	text: string;
	avatar: StaticImageData;
};

export const Testimonials: Testimonials[] = [
	{
		name: "Nevo Biton",
		position: "Director of Engineering @ Dun and Bradstreet",
		text: "Simon was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
		avatar: memojiAvatar1
	},
	{
		name: "Talia Chriqui",
		position: "CEO @ Talia Chriqui Consulting",
		text: "My revenue increased by 50% in the first month by lunching my business new portfolio made by Simon.",
		avatar: memojiAvatar2
	},
	{
		name: "Daniel White",
		position: "CEO @ InnovateCo",
		text: "Simon's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
		avatar: memojiAvatar3
	},
	{
		name: "Emily Carter",
		position: "Product Manager @ GlobalTech",
		text: "Simon is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
		avatar: memojiAvatar4
	},
	{
		name: "Andrey Kaminsky",
		position: "CTO @ KTech",
		text: "Simon's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
		avatar: memojiAvatar5
	}
];
