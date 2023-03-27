import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
	return (
		<AnimatePresence mode='wait'>
		<div className="md:flex min-h-screen relative">
			<SideBar />
			{/* <Navbar /> */}
			<main className="main__main w-full px-[1.5rem] pt-[2rem] light:bg-white dark:bg-black-bg">{children}</main>
		</div>
		</AnimatePresence>
	);
};

export default Layout;
