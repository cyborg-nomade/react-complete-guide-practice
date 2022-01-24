import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addQuote } from "../lib/api";

import QuoteForm from "./../components/quotes/QuoteForm";
import useHttp from "./../hooks/use-http";

const NewQuote = (props) => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
