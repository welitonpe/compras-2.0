import { useContext } from "react";
import Form from "./Components/form";
import List from "./Components/List";
import { CarrinhoContexto } from "./Context/carrinho";

function App() {
  const { carrinho, total } = useContext(CarrinhoContexto);

  return (
    <div className="App container overflow-hidden">
      <div className="body">
        <div className="pt-3" style={{ marginBottom: 280 }}>
          <List></List>
        </div>

        <div className={"container card card-body fixed-bottom"}>
          <div
            className="alert alert-danger d-flex justify-content-center"
            role="alert"
          >
            {carrinho.lista.length &&
              total.totalValue.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
          </div>
          <Form></Form>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
