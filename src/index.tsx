import React from "react";
import ReactDOM from "react-dom";
import "./Style/index.scss";
import CarrinhoContextProvider from "./Context/carrinho";
import AppRouter from "./AppRouter";
import { AppContextProvider } from "./Context/AppContext";
import ThemeContextProvider from "./Context/ThemeContextProvider";

ReactDOM.render(
	<ThemeContextProvider>
		<AppContextProvider>
			<CarrinhoContextProvider>
				<React.StrictMode>
					<AppRouter />
				</React.StrictMode>
			</CarrinhoContextProvider>
		</AppContextProvider>
	</ThemeContextProvider>,
	document.getElementById("root"),
);
