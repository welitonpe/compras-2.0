import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Style/index.scss";
import CarrinhoContextProvider from "./Context/carrinho";

ReactDOM.render(
  <CarrinhoContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CarrinhoContextProvider>,

  document.getElementById("root")
);
