import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterSelectedHandler = (filter) => {
    setSelectedYear(filter);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  let expensesContent = <p>No expenses found!</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={selectedYear}
          onFilterSelected={filterSelectedHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
