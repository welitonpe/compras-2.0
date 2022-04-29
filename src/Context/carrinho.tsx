import React, { useEffect, useState } from "react";
import {
  Item,
  itemPadrao,
  ICarrinho,
  CarrinhoPadrao,
  ICarrinhoContext,
} from "../Interface";

export interface Ichildren {
  children?: React.ReactChildren | JSX.Element | JSX.Element[];
}

const CarrinhoContexto = React.createContext<ICarrinhoContext>({
  carrinho: CarrinhoPadrao,
  item: itemPadrao,
  decrement: () => {},
  increment: () => {},
  onChangeItem: () => {},
  addItemList: () => {},
  removeItem: () => {},
});

const CarrinhoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dadosCarrinho, setDadosCarrinho] = useState<ICarrinho>(CarrinhoPadrao);
  const [item, setItem] = useState<Item>(itemPadrao);

  useEffect(() => {
    // async function setCarrinho() {
    //   setDadosCarrinho(CarrinhoPadrao);
    // }

    console.log(item);
    console.log(dadosCarrinho);
  }, [dadosCarrinho, item]);

  function onChangeItem(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    if (name === "valor") {
      return setItem({ ...item, [name]: Number.parseFloat(value) });
    }

    return setItem({ ...item, [name]: value });
  }

  function removeItem(key: number) {
    dadosCarrinho.lista.splice(key, 1);
    setDadosCarrinho({ ...dadosCarrinho });
  }

  function addItemList() {
    setDadosCarrinho({
      ...dadosCarrinho,
      lista: [...dadosCarrinho.lista, item],
    });
  }

  function decrementItem(id: number): void {
    dadosCarrinho.lista[id].quantidade--;
    setDadosCarrinho({ ...dadosCarrinho });
  }

  function incrementItem(id: number): void {
    dadosCarrinho.lista[id].quantidade++;
    setDadosCarrinho({ ...dadosCarrinho });
  }

  return (
    <CarrinhoContexto.Provider
      value={{
        decrement: decrementItem,
        carrinho: dadosCarrinho,
        item: item,
        increment: incrementItem,
        onChangeItem: onChangeItem,
        addItemList: addItemList,
        removeItem: removeItem,
      }}
    >
      {children}
    </CarrinhoContexto.Provider>
  );
};

export { CarrinhoContexto };
export default CarrinhoContextProvider;
