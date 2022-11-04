import Table from "./components/table/Table";
import TableProvider from "./store/TableProvider";
import Header from "./components/Hader/Header";

function App() {
  return (
    //all component inside TableProvider has access to context
    <TableProvider>
      <header>
        <Header/>
      </header>
      <main>
        <Table/>
      </main>

    </TableProvider>
  );
}

export default App;
