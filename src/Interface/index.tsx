export type Item = {
  id: number;
  nome: string;
  valor: number;
  quantidade: number;
};

export type ICarrinho = {
  lista: Item[];
  valorTotal: number;
};

export type ICarrinhoContext = {
  carrinho: ICarrinho;
  increment: (id: number) => void;
  onChangeItem: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addItemList: () => void;
  removeItem: (id: number) => void;
  item: Item;
};

export const itemPadrao: Item = {
  id: 0,
  nome: "",
  valor: 0,
  quantidade: 0,
};

export const CarrinhoPadrao: ICarrinho = {
  lista: [
    {
      id: 0,
      nome: "Farinha de trigo Boa Sorte",
      valor: 3.5,
      quantidade: 1,
    },
    {
      id: 1,

      nome: "Feijão Mulatinho kicaldo",
      valor: 5.0,
      quantidade: 1,
    },
    {
      id: 2,
      nome: "Batata Inglesa seila",
      valor: 2.0,
      quantidade: 1,
    },
    {
      id: 3,
      nome: "Farofa temperada Zaely",
      valor: 0.5,
      quantidade: 1,
    },
  ],
  valorTotal: 10,
};
