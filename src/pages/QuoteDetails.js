import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api";
import Comments from "./../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
import useHttp from "./../hooks/use-http";

const QuoteDetails = (props) => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
