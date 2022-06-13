import { Outlet } from "react-router-dom";
import Footer from "../Footer/Index";
import React from "react";
import ButtonAppBar from "../AppBar";

const Layout = () => (
	<>
		<header>
			<ButtonAppBar />
		</header>
		<section>
			<Outlet />
		</section>
		<footer>
			<Footer />
		</footer>
	</>
);
export default Layout;
