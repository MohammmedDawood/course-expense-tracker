import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense({ onExpenseSubmit }) {
  const [isEditing, setisEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // spread operator
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    onExpenseSubmit(expenseData);
    setisEditing(false);
  };
  const startEditingHandler = () => {
    // console.log("start editing");
    setisEditing(true);
  };
  const stopEditingHandler = () => {
    // console.log("stop editing");
    setisEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button className="new-expense__btn" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
