import { useContext } from "react";
import { CarrinhoContexto } from "../Context/carrinho";

const Form: React.FC = () => {
  const { item, onChangeItem, addItemList } = useContext(CarrinhoContexto);

  return (
    <>
      <div className="d-flex flex-row justify-content-between">
        <form className="col-10" autoComplete="off">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              onChange={onChangeItem}
              placeholder="Nome"
              autoComplete="off"
            />
          </div>
          <div className=" ml-3">
            <input
              type="number"
              className="form-control"
              id="valor"
              name="valor"
              onChange={onChangeItem}
              placeholder="Valor Unitario"
              value={item.valor}
            ></input>
          </div>
        </form>
        <button
          type="button"
          className="ml-3 btn btn-primary col-2"
          onClick={() => addItemList()}
        >
          Add
        </button>
      </div>
    </>
  );
};
export default Form;
