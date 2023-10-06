import TicketDetail from './Screens/TicketDetail';
import TicketList from './Screens/TicketList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export type AppProps = {};

const App = () => {
  return <Router>
    <Switch>
      <Route path="/" exact>
        <TicketList />
      </Route>
      <Route path="/ticket/:id">
        <TicketDetail />
      </Route>
    </Switch>
  </Router>
};

export default App;
