/** @format */

import React, { Suspense } from "react";

import LoadingSpinner from "./components/UI/LoadingSpinner";
const Layout = React.lazy(() => import("./components/layout/Layout"));
function App() {
	return (
		<div>
			<Suspense
				fallback={
					<div className='centered'>
						<LoadingSpinner />
					</div>
				}>
				<Layout></Layout>
			</Suspense>
		</div>
	);
}

export default App;

// https://xd.adobe.com/view/f8520c0a-fab2-4362-ab7f-f9b4540030ec-ad01/
