import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses({ items }) {
  const [filterdYear, setFilterdYear] = useState("2020");
  const filterChangeHandler = (selecterYear) => {
    // console.log(selecterYear);
    setFilterdYear(selecterYear);
  };
  const filteredItems = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangeHandler}
          selected={filterdYear}
        />
        <ExpensesList filteredItems={filteredItems} />
      </Card>
    </>
  );
}

export default Expenses;
