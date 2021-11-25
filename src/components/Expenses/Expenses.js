import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";

function Expenses({ items }) {
  const [filterdYear, setFilterdYear] = useState("2020");
  const filterChangeHandler = (selecterYear) => {
    console.log(selecterYear);
    setFilterdYear(selecterYear);
  };
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangeHandler}
          selected={filterdYear}
        />
        {items.map((item) => (
          <ExpenseItem key={item.id} expense={item} />
        ))}
      </Card>
    </>
  );
}

export default Expenses;
