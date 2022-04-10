export type Item = {
  nome: string;
  valor: number;
  quantidade: number;
};

export type ICarrinho = {
  lista: Item[];
};

export type ICarrinhoContext = {
  carrinho: ICarrinho;
  decrement: (id: number) => void;
  increment: (id: number) => void;
  onChangeItem: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addItemList: () => void;
  removeItem: (id: number) => void;
  item: Item;
};

export const itemPadrao: Item = {
  nome: "",
  valor: 0,
  quantidade: 0,
};

export const CarrinhoPadrao: ICarrinho = {
  lista: [
    {
      nome: "Farinha de trigo Boa Sorte",
      valor: 3.5,
      quantidade: 1,
    },
    {
      nome: "Feijão Mulatinho kicaldo",
      valor: 5.0,
      quantidade: 1,
    },
    {
      nome: "Batata Inglesa seila",
      valor: 2.0,
      quantidade: 1,
    },
    {
      nome: "Farofa temperada Zaely",
      valor: 0.5,
      quantidade: 1,
    },
  ],
};
