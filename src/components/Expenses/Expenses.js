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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={selectedYear}
          onFilterSelected={filterSelectedHandler}
        />
        {props.expenses
          .filter(
            (expense) => expense.date.getFullYear().toString() === selectedYear
          )
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
