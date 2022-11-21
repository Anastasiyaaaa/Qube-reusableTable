import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import TableProvider from "./store/TableProvider";
import Header from "./components/header/Header";
import TableShows from "./pages/TableShows";
import TableSchedules from "./pages/TableSchedules";
import TableScreens from "./pages/TableScreens";
import TableOrders from "./pages/TableOrders";

function App() {
  return (
    //Schedules
    //all component inside TableProvider has access to context
    <BrowserRouter>
      <TableProvider>
        <Header/>
        <main>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/orders-page'/>
            </Route>
          </Switch>
          <Route path='/orders-page' exact>
            <TableOrders/>
          </Route>
          <Route path='/schedules-page' exact>
            <TableSchedules/>
          </Route>
          <Route path='/screens-page' exact>
            <TableScreens/>
          </Route>
          <Route path='/shows-page' exact>
            <TableShows/>
          </Route>
        </main>
      </TableProvider>
    </BrowserRouter>

  );
}

export default App;
