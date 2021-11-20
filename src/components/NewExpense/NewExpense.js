import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const newExpensesButtonHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  let newExpensesContent = (
    <button onClick={newExpensesButtonHandler}>Add New Expense</button>
  );

  if (isEditing) {
    newExpensesContent = (
      <ExpenseForm
        isEditing={isEditing}
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    );
  }

  return <div className="new-expense">{newExpensesContent}</div>;
};

export default NewExpense;
