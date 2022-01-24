import { Switch, Route } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <Switch>
      <Route path="/quotes" component={AllQuotes} exact />
      <Route path="/quotes/:quoteId" component={QuoteDetails} />
      <Route path="/new-quote" component={NewQuote} />
    </Switch>
  );
}

export default App;
