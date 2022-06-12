import React, { useEffect, useState } from "react";
import {
  Item,
  itemPadrao,
  ICarrinho,
  CarrinhoPadrao,
  ICarrinhoContext,
  ValorTotal,
  totalValue,
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
  total: totalValue,
});

const CarrinhoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dadosCarrinho, setDadosCarrinho] = useState<ICarrinho>(CarrinhoPadrao);
  const [item, setItem] = useState<Item>(itemPadrao);
  const [valorTotal, SetValorTotal] = useState<ValorTotal>({ totalValue: 0 });

  function UpdateToralValue() {
    let val = dadosCarrinho.lista
      .map(({ quantidade, valor }) => quantidade * valor)
      .reduce((valorA, valorB) => valorA + valorB);
    SetValorTotal({ totalValue: val });
  }

  useEffect(() => {
    dadosCarrinho.lista.length && UpdateToralValue();
  }, [dadosCarrinho]);

  function onChangeItem(e: any): void {
    const { name, value } = e.target;

    if (name === "valor") {
      return setItem({
        ...item,
        [name]: Number.parseFloat(value),
      });
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
    UpdateToralValue();
  }

  function incrementItem(id: number): void {
    dadosCarrinho.lista[id].quantidade++;
    setDadosCarrinho({ ...dadosCarrinho });
    UpdateToralValue();
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
        total: valorTotal,
      }}
    >
      {children}
    </CarrinhoContexto.Provider>
  );
};

export { CarrinhoContexto };
export default CarrinhoContextProvider;
