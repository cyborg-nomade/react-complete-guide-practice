import { Route, Routes, Navigate, Link } from "react-router-dom";
import React, { Suspense } from "react";

import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// import AllQuotes from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";
// import NewQuote from "./pages/NewQuote";
// import NotFound from "./pages/NotFound";
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route
          path="/quotes"
          element={
            <Suspense
              fallback={
                <div className="centered">
                  <LoadingSpinner />
                </div>
              }
            >
              <AllQuotes />
            </Suspense>
          }
        />
        <Route
          path="/quotes/:quoteId"
          element={
            <Suspense
              fallback={
                <div className="centered">
                  <LoadingSpinner />
                </div>
              }
            >
              <QuoteDetail />
            </Suspense>
          }
        >
          <Route
            path=""
            element={
              <div className="centered">
                <Link className="btn--flat" to={`comments`}>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route
          path="/new-quote"
          element={
            <Suspense
              fallback={
                <div className="centered">
                  <LoadingSpinner />
                </div>
              }
            >
              <NewQuote />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div className="centered">
                  <LoadingSpinner />
                </div>
              }
            >
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
