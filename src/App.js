import Table from "./components/table/Table";
import TableProvider from "./store/TableProvider";

function App() {
  return (
    //all component inside TableProvider has access to context
    <TableProvider>
      <Table/>
    </TableProvider>
  );
}

export default App;
