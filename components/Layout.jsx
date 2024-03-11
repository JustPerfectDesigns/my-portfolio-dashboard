import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";
import BackToTopButton from "./BackToTopButton";

const Layout = ({ children }) => {
	return (
		<AnimatePresence mode="wait">
			<div className="relative min-h-screen md:flex">
				<SideBar />
				{/* <Navbar /> */}
				<main className="main__main light:bg-white w-full px-[1.5rem] pt-[2rem] dark:bg-black-bg">
					{children}
					<BackToTopButton />
				</main>
			</div>
		</AnimatePresence>
	);
};

export default Layout;
