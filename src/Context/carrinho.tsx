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
    async function setCarrinho() {
      setDadosCarrinho(CarrinhoPadrao);
    }
    setCarrinho();
  }, []);

  function onChangeItem(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  }

  function removeItem(key: number) {
    setDadosCarrinho({
      ...dadosCarrinho,
      lista: [...dadosCarrinho.lista.slice(key + 1)],
    });
  }

  function addItemList() {
    setDadosCarrinho({
      ...dadosCarrinho,
      lista: [...dadosCarrinho.lista, item],
    });
  }

  function incrementItem(id: number): void {
    const item = dadosCarrinho.lista.filter((item: Item) => item.id === id);
    item[0].quantidade++;
  }

  return (
    <CarrinhoContexto.Provider
      value={{
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
