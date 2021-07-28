/** @format */

import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Footer from "./Footer";
import Work from "../Work";
import Features from "../Features";
import About from "../About";

const Layout = (props) => {
	return (
		<>
			<MainNavigation />
			<main>
				<About />
				<Work />
				<Features />
				<Footer />
			</main>
		</>
	);
};

export default Layout;
