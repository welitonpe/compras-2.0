import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Index";

const Layout = () => (
	<>
		<section>
			<Outlet />
		</section>
		<footer>
			<Footer />
		</footer>
	</>
);
export default Layout;
