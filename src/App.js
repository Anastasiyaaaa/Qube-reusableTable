import './App.css';
import Table from "./components/table/Table";
import TableProvider from "./store/TableProvider";

function App() {
  return (
    <TableProvider>
      <Table/>
    </TableProvider>
  );
}

export default App;
