// import Logo from "../images/ideasmarketplacelogo.png";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BsGear } from "react-icons/bs";
import sidebarNav from "../data/sidebarNav";
import { GabLogo } from "./svgs/gabby";
import GabLogoWhite from "../public/images/gabby-logo-w.png"

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { BiMoon, BiSun, BiUserCircle } from "react-icons/bi";
import { MdOutlineGridView } from "react-icons/md";
import { useTheme } from 'next-themes';

import {motion} from "framer-motion"

const SideBar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const sideBarRef = useRef();
	const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
//   const currentTheme = theme === 'system' ? systemTheme : theme;

	// Material UI Menu Start
	const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
	// Material UI Menu Ends

	const router = useRouter();

	function toogleSideBar() {
		sideBarRef.current.classList.toggle("-translate-x-full");
	}

	function navClickHideSidebar() {
		sideBarRef.current.classList.add("-translate-x-full");
	}

	return (
		<div className="md:sticky md:top-0 z-50 text-white">
			{/* MOBILE SIDEBAR */}
			<div
				className="w-full bg-transparent flex justify-between p-4 items-center fixed top-0 z-30 transform translate-y-0
          md:-translate-y-full"
			>
				{/* <a className="block text-white font-extrabold dark:text-dw ">CoolBar</a> */}
				<div></div>
				<button
					className="rounded bg-black-sidebar p-1"
					onClick={toogleSideBar}
				>
					<MdOutlineGridView className="text-[1.3rem]" />
				</button>
			</div>
				<div
					ref={sideBarRef}
					className="dark:bg-black-sidebar bg-[#FBFCFD] border-r-2 border-[#f2f2f2] dark:border-[#252528] w-[260px] space-y-10 px-9 pt-0 lg:pt-7 pb-7 fixed inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 z-50 transition duration-200 ease-in-out flex flex-col justify-around child:transition-all md:max-h-screen md:min-h-screen md:sticky md:top-0">
				<div>

				<div className="logo mb-12">
					{/* <Image
						src={GabLogoWhite}
						width={100}
						height={100}
						alt="Gabriel Samuel Aina"
						className="mb-4 w-[150px] light:invert"
					/> */}

					<GabLogo width={100}	height={100} className="mb-4 w-[150px] text-[#121212] dark:text-white"/>

				</div>
				<div className="flex flex-col justify-between h-4/5">
					<div className="sidebar__top">
						<span className="menu-desc block text-[.65rem] uppercase mb-5 dark:text-navlink-color text-[#121212]">
							Menu Items
						</span>
						<ul className="menu__items grid gap-8">
							{sidebarNav.map((nav, index) => (
								<li
									key={`nav-${index}`}
									className={
										router.pathname === nav.link
											? "dark:text-green-color text-[#45C87F] font-semibold"
											: "dark:text-navlink-color text-[#121212]"
									}
								>
									<Link href={nav.link} passHref onClick={navClickHideSidebar}>
										<div className="navLink flex items-center gap-3">
											<div className="navLink-icon text-base text-green-color">
												{nav.icon}
											</div>
											<span className="navLink-name block text-sm">
												{nav.text}
											</span>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</div>
					</div>
				</div>
					
					<div className="sidebar__middle w-full h-[1px] dark:bg-black-border bg-[#CCCCCE]"></div>
					
					<div>

					<div className="sidebar__bottom">
						<span className="menu-desc block text-[.65rem] uppercase mb-5 dark:text-navlink-color text-[#121212]">
							Switch Theme
						</span>
						<div className="menu__items">
							<motion.div className="navLink flex items-center gap-3"
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}>
								{/* <Button
        							id="basic-button"
        							aria-controls={open ? 'basic-menu' : undefined}
									aria-haspopup="true"
									aria-expanded={open ? 'true' : undefined}
									onClick={handleClick}
      						>
									Prefered Theme
								</Button>
								<Menu
									id="basic-menu"
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									MenuListProps={{
										'aria-labelledby': 'basic-button',
									}}
									>
										<MenuItem onClick={handleClose}>Dark</MenuItem>
										<MenuItem onClick={handleClose}>Light</MenuItem>
										<MenuItem onClick={handleClose}>System</MenuItem>
								</Menu> */}
								{/* Patse Here  */}
								{
									theme === 'dark' ? (

										<button onClick={() => setTheme('light')} className="dark:bg-black-container bg-[#F6F8FA] flex justify-center items-center p-4 gap-2 rounded-full"><BiSun className="text-2xl text-black-container dark:text-[#F6F8FA]" />  <span className="font-medium">Light Mode</span></button>
									)
									:
									(

										<button onClick={() => setTheme('dark')} className="dark:bg-black-container bg-[#F6F8FA] flex justify-center items-center p-4 gap-2 rounded-full"><BiMoon className="text-2xl text-black-container dark:text-[#F6F8FA]" />  <span className="text-black-container dark:text-[#F6F8FA] font-medium">Dark Mode</span></button>
									)
								}
			 					{/* End Paste here  */}
							</motion.div>
						</div>
					</div>
					</div>
			</div>
		</div>
	);
};

export default SideBar;
