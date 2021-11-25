import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map((item) => (
        <ExpenseItem key={item.id} expense={item} />
      ))}
    </Card>
  );
}

export default Expenses;
