import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";

const AppRouter = () => {
	return (
		<HashRouter>
			<Routes>
				<Route element={<Layout />} path="/">
					<Route element={<Home />} index />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default AppRouter;
