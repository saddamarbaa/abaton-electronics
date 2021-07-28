/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<img src='/images/mainlogo.png' alt='' />
			</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<a href='#about'> About</a>
					</li>

					<li>
						<a href='#feature'>feature</a>
					</li>

					<li>
						<a href='#work'>How it works</a>
					</li>

					<li className={classes.contact}>
						<NavLink to='/contact'>Contact</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
