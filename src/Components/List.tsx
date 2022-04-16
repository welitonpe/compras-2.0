import { useContext } from "react";
import { CarrinhoContexto } from "../Context/carrinho";
import { Item } from "../Interface";

const img =
  "https://ocrim.com.br/wp-content/uploads/2021/05/Mockup_Trigolar_TIPO1_1kg_2019-547x640.png";

const List: React.FC = () => {
  const { carrinho, increment, decrement } = useContext(CarrinhoContexto);
  return (
    <div className="">
      {carrinho.lista.map((element: Item, index: number) => {
        return (
          <div key={index} className="card card-1 mb-1">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
              X<span className="visually-hidden">unread messages</span>
            </span>
            <div className="d-flex flex-row card-body justify-content-between">
              <div
                className="d-flex
              justtify-content-center align-items-center col-3"
              >
                <img src={img} alt="" style={{ height: 100 }} />
              </div>

              <div className="d-flex flex-column justify-content-between col-7 px-1">
                <div className="col-12">{element.nome}</div>
                <div className="d-flex flex-column">
                  <div className="">
                    {element.valor.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>{" "}
                  <div className="">{element.quantidade}</div>
                  <hr />
                  <div className="">
                    {(element.quantidade * element.valor).toLocaleString(
                      "pt-BR",
                      {
                        minimumFractionDigits: 2,
                        style: "currency",
                        currency: "BRL",
                      }
                    )}
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between flex-column col-2">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => increment(index)}
                >
                  +
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => decrement(index)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        );
      })}

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
    </div>
  );
};

export default List;
