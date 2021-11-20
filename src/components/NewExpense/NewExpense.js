import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    props.isToggledAddExpense = false;
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        isToggledAddExpense={props.isToggledAddExpense}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
