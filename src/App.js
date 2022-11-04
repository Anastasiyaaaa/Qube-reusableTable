import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import TableProvider from "./store/TableProvider";
import Header from "./components/header/Header";
import TableMainPage from "./pages/TableMain";
import TableExtraPage from "./pages/TableExtra";

function App() {
  return (
    //all component inside TableProvider has access to context
    <BrowserRouter>
      <TableProvider>
        <Header/>
        <main>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/main-table'/>
            </Route>
          </Switch>
          <Route path='/main-table' exact>
            <TableMainPage/>
          </Route>
          <Route path='/extra-table' exact>
            <TableExtraPage/>
          </Route>
        </main>
      </TableProvider>
    </BrowserRouter>

  );
}

export default App;
