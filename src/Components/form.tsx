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
            value={item.valor.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
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

      <div className="">
        {carrinho.lista.map((element: Item, index: number) => {
          return (
            <div key={index} className="card card-1 mb-4">
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                X<span className="visually-hidden">unread messages</span>
              </span>

              <div className="d-flex flex-column card-body">
                <div className="d-flex flex-row justify-content-between">
                  <div className="col-8">{element.nome}</div>
                  <div className="col-3">
                    {element.valor.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>
                  <div className="col-1">{element.quantidade}</div>
                </div>
                <div className="d-flex justify-content-end">
                  <div
                    className="btn-group btn-group-lg d-flex justify-content-end"
                    role="group"
                    aria-label="..."
                  >
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
              </div>
            </div>
          );
        })}
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
