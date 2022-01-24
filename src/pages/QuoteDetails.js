import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "./../components/comments/Comments";

const QuoteDetails = (props) => {
  const params = useParams();
  return (
    <React.Fragment>
      <h1>Quote Details Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`} component={Comments} />
    </React.Fragment>
  );
};

export default QuoteDetails;
