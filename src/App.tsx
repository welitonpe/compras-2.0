import Form from "./Components/form";
import List from "./Components/List";
function App() {
  return (
    <div className="App container overflow-hidden">
      <div className="body">
        <div className="pt-3" style={{ marginBottom: 280 }}>
          <List></List>
        </div>

        <div className={"container card card-body fixed-bottom"}>
          <div className="alert alert-danger " role="alert">
            R$ 150,00
          </div>
          <Form></Form>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
