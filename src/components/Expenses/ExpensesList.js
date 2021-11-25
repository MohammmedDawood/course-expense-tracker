import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ filteredItems }) {
  if (filteredItems.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredItems.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
}

export default ExpensesList;
