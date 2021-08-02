/** @format */

import { memo, React, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	const [burgerMenuStatus, SetBurgerMenuStatus] = useState(false);

	return (
		<>
			<header className={classes.header}>
				<div className={classes.logo}>
					<a href='/'>
						<img src='/images/mainlogo.png' alt='Logo' />
					</a>
				</div>
				<nav className={`${classes.nav} ${classes.showNav}`}>
					<ul>
						<li>
							<a className={classes.active} href='#about'>
								About
							</a>
						</li>

						<li>
							<a className={classes.worklink} href='#feature'>
								AGEO 19
							</a>
						</li>

						<li>
							<a className={classes.worklink} href='#work'>
								Who we are?
							</a>
						</li>

						<li>
							<a
								href='#contact'
								onClick={() => {
									SetBurgerMenuStatus(false);
								}}>
								Contact
							</a>
						</li>
					</ul>
				</nav>

				<nav className={`${classes.nav} ${classes.customMenu}`}>
					<ul>
						<li>
							<MenuIcon
								onClick={() => {
									SetBurgerMenuStatus(true);
								}}
							/>
						</li>
					</ul>
				</nav>

				{/* SideBar */}
				<nav
					className={classes["side-nav"]}
					style={{
						transform: !burgerMenuStatus
							? "translateX(100%) "
							: "translateX(0%)",
					}}>
					<IconButton>
						<CloseIcon
							onClick={() => {
								SetBurgerMenuStatus(false);
							}}
						/>
					</IconButton>
					<ul>
						<li>
							<a
								href='#about'
								onClick={() => {
									SetBurgerMenuStatus(false);
								}}>
								About
							</a>
						</li>

						<li>
							<a
								href='#feature'
								onClick={() => {
									SetBurgerMenuStatus(false);
								}}>
								AGEO 19
							</a>
						</li>
						<li>
							<a
								href='#work'
								onClick={() => {
									SetBurgerMenuStatus(false);
								}}>
								Who we are?
							</a>
						</li>
						<li>
							<a
								href='#contact'
								onClick={() => {
									SetBurgerMenuStatus(false);
								}}>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default memo(MainNavigation);
