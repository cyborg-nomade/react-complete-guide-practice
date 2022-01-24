import React from "react";
import { useParams } from "react-router-dom";

const QuoteDetails = (props) => {
  const params = useParams();
  return (
    <React.Fragment>
      <h1>Quote Details Page</h1>
      <p>{params.quoteId}</p>
    </React.Fragment>
  );
};

export default QuoteDetails;
