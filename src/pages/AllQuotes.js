import React from "react";
import QuoteList from "./../components/quotes/QuoteList";

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

const AllQuotes = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
