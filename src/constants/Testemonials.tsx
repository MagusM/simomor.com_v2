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
		name: "Andrey Kaminsky",
		position: "CTO @ KTech",
		text: "Simon's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
		avatar: memojiAvatar5
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
	}
];

export const LeeronTitles: Testimonials[] = [
	{
		avatar: memojiAvatar1,
		name: "Leeron Kahani",
		position: "Highlord of the Silver Hand Brotherhood",
		text: "Simon’s expertise in full-stack development is unparalleled. He transformed our antiquated systems into a seamless, modern platform that has revolutionized our operations."
	},
	{
		avatar: memojiAvatar1,
		name: "Leeron Kahani",
		position: "Archangel of Justice",
		text: "Simon brought order to the chaos of our tech infrastructure. His ability to deliver robust, scalable solutions is nothing short of angelic."
	},
	{
		avatar: memojiAvatar1,
		name: "Leeron Kahani",
		position: "Executor of the Protoss Fleet",
		text: "Simon’s vision and technical prowess were instrumental in building a platform that united our teams and improved collaboration across the galaxy."
	},
	{
		avatar: memojiAvatar1,
		name: "Leeron Kahani",
		position: "Zerg Hive Lord Breeder",
		text: "Even amidst the chaos of the swarm, Simon’s development skills shined. He crafted a system so efficient, even the hive minds are impressed."
	},
	{
		avatar: memojiAvatar1,
		name: "Leeron Kahani",
		position: "Mentat of the Spacing Guild",
		text: "Simon's ability to navigate complex systems is as precise as foldspace calculations. He brought efficiency and clarity to our most intricate operations."
	},
	{
		avatar: memojiAvatar1,
		name: "Leeron Kahani",
		position: "Dark Lord of the Sith",
		text: "Simon harnessed the full power of the stack to create a platform that has cemented our dominance in the galaxy. Truly, a master of his craft."
	}
];
