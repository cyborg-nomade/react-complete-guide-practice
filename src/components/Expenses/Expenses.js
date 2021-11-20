import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterSelectedHandler = (filter) => {
    setSelectedYear(filter);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={selectedYear}
          onFilterSelected={filterSelectedHandler}
        />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
