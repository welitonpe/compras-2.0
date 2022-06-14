import { Table } from "@mantine/core";
const elements = [
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
  { name: "wellington", position: 1, symbol: "@", mass: "10" },
];

const TableApp = () => {
  const ths = (
    <tr>
      <th>Element position</th>
      <th>Element name</th>
      <th>Symbol</th>
      <th>Atomic mass</th>
    </tr>
  );

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
  return (
    <Table striped>
      {/* <caption>Some elements from periodic table</caption> */}
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
      {/* <tfoot>{ths}</tfoot> */}
    </Table>
  );
};
export default TableApp;
