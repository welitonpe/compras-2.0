import { useContext } from "react";
import { CarrinhoContexto } from "../Context/carrinho";
import { Item } from "../Interface";

const Form: React.FC = () => {
  const { item, carrinho, increment, onChangeItem, addItemList, removeItem } =
    useContext(CarrinhoContexto);

  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="item"
            name="item"
            onChange={onChangeItem}
            placeholder="Item"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="valor"
            name="valor"
            onChange={onChangeItem}
            placeholder="Valor Unitario"
          ></input>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => addItemList}
        >
          Primary
        </button>
      </form>
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">V. U.</th>
              <th scope="col">Qtd.</th>
              <th scope="col">Qtd.</th>
            </tr>
          </thead>
          <tbody>
            {carrinho.lista.map((element: Item, index: number) => {
              return (
                <tr key={index} className="align-self-center">
                  <td onClick={() => removeItem(element.id)}>{element.nome}</td>
                  <td>
                    {element.valor.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td>{element.quantidade}</td>
                  <td>
                    <div
                      className="btn-group btn-group-lg d-flex justify-content-end"
                      role="group"
                      aria-label="..."
                    >
                      <button type="button" className="btn btn-danger">
                        -
                      </button>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => increment(element.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Form;
