import Expenses from "./components/Expenses/Expenses";

import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [showAddExpenses, setShowAddExpenses] = useState(false);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const newExpensesButtonHandler = () => {
    setShowAddExpenses(true);
  };

  let newExpensesContent = (
    <div className="new-expense">
      <button onClick={newExpensesButtonHandler}>Hi</button>
    </div>
  );

  if (showAddExpenses) {
    newExpensesContent = (
      <NewExpense
        isToggledAddExpense={showAddExpenses}
        onAddExpense={addExpenseHandler}
      />
    );
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      {newExpensesContent}
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
