/** @format */

import React from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./components/About";

import Contact from "./pages/Contact";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<About />
				</Route>

				<Route path='/contact'>
					<Contact />
				</Route>

				<Route path='*'>
					<h1>Page not found</h1>
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;

// https://xd.adobe.com/view/f8520c0a-fab2-4362-ab7f-f9b4540030ec-ad01/
