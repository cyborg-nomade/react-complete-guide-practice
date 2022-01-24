import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "./../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "This is really a quote",
  },
  {
    id: "q2",
    author: "Uriel",
    text: "Realy!?",
  },
  {
    id: "q3",
    author: "John",
    text: "Impressive skills at quotation!",
  },
];

const QuoteDetails = (props) => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} component={Comments} />
    </React.Fragment>
  );
};

export default QuoteDetails;
