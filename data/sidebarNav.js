import { RiBriefcase2Line, RiArticleLine, RiYoutubeLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUser, HiCode } from "react-icons/hi";

const sidebarNav = [
	{
		link: "/",
		icon: <RxDashboard />,
		text: "Dashboard",
	},
	{
		link: "/case-study",
		icon: <RiBriefcase2Line />,
		text: "Case Studies",
	},
	{
		link: "/about",
		icon: <HiOutlineUser />,
		text: "About Me",
	},
	{
		link: "/skills",
		icon: <HiCode />,
		text: "Skills & Softwares",
	},
	// {
	// 	link: "/youtube",
	// 	icon: <RiYoutubeLine />,
	// 	text: "YouTube Channel",
	// },
	{
		link: "/post",
		icon: <RiArticleLine />,
		text: "My Blog",
	},
];

export default sidebarNav;
