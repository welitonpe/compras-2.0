import React from "react";
import ReactDOM from "react-dom";
import "./Style/index.scss";
import AppRouter from "./AppRouter";
import { AppContextProvider } from "./Context/AppContext";

ReactDOM.render(
		<AppContextProvider>
				<React.StrictMode>
					<AppRouter />
				</React.StrictMode>
		</AppContextProvider>,
	document.getElementById("root"),
);
