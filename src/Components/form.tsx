import { useContext } from "react";
import { CarrinhoContexto } from "../Context/carrinho";
import { Item } from "../Interface";

const Form: React.FC = () => {
  const {
    item,
    carrinho,
    increment,
    onChangeItem,
    addItemList,
    removeItem,
    decrement,
  } = useContext(CarrinhoContexto);

  return (
    <>
      <form className="mb-3">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            onChange={onChangeItem}
            placeholder="Nome"
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
          onClick={() => addItemList()}
        >
          Primary
        </button>
      </form>

      <div>
        <ul className="list-group">
          {carrinho.lista.map((element: Item, index: number) => {
            return (
              <li key={index} className="list-group-item">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row justify-content-between">
                    <div>{element.nome}</div>
                    <div>{element.valor}</div>
                    <div>{element.quantidade}</div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => decrement(index)}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => increment(index)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
          <li></li>
        </ul>
      </div>

      {/* <div className="">
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
                <tr key={index} className="align-self-center" >
                  <td onClick={() => removeItem(index)}>{element.nome}</td>
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
                      <button type="button" className="btn btn-danger" onClick={() => decrement(index)}>
                        -
                      </button>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => increment(index)}
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
      </div> */}
    </>
  );
};
export default Form;
