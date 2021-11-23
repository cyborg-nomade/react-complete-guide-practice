import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
