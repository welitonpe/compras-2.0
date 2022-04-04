export type Itens = {
  produto: string;
  valorUnitario: number;
  quantidade: number;
};

export type Lista = {
  itens: Itens[];
  valorDaCompra: number;
};

export const listaDeCompras: Lista = {
  itens: [
    {
      produto: "feijão",
      valorUnitario: 1.0,
      quantidade: 1,
    },
  ],
  valorDaCompra: 1,
};
