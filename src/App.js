import { Switch, Route, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" component={AllQuotes} exact />
      <Route path="/quotes/:quoteId" component={QuoteDetails} />
      <Route path="/new-quote" component={NewQuote} />
    </Switch>
  );
}

export default App;
