import { useContext } from "react";
import { CarrinhoContexto } from "../Context/carrinho";
import { Item } from "../Interface";

const Form: React.FC = () => {
  const { item, onChangeItem, addItemList } = useContext(CarrinhoContexto);

  return (
    <>
      <div className="d-flex flex-row justify-content-between">
        <form className="mr-3 col-10">
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
          <div className="">
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
          className="btn btn-primary ml-2"
          onClick={() => addItemList()}
        >
          Add
        </button>
      </div>
    </>
  );
};
export default Form;
