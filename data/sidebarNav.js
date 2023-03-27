import { RiLightbulbLine } from "react-icons/ri";
import { BiWallet, BiDuplicate, BiUserCircle } from "react-icons/bi";
import { TbId, TbTicket } from "react-icons/tb";

const sidebarNav = [
	{
		link: "/",
		icon: <RiLightbulbLine />,
		text: "Dashboard",
	},
	{
		link: "/case-study",
		icon: <BiWallet />,
		text: "Case Studies",
	},
	{
		link: "/about",
		icon: <BiUserCircle />,
		text: "About Me",
	},
	{
		link: "/skills",
		icon: <BiDuplicate />,
		text: "Skills & Softwares",
	},
	// {
	// 	link: "/youtube",
	// 	icon: <TbId />,
	// 	text: "YouTube Channel",
	// },
	{
		link: "/post",
		icon: <TbTicket />,
		text: "My Blog",
	},
];

export default sidebarNav;
