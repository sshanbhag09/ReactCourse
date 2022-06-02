import "./ExpenseItem.css";
import Card from "../Ui/Card";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  // const clickHandler = () => {
  //   setTitle("Updated!");
  // };
  const date = props.date.toLocaleDateString("en-US", options);
  return (
    <Card className="expense_item">
      {/* <div>{date}</div> */}
      <ExpenseDate date={props.date} />
      <div className="expense_item_description">
        <h2>{title}</h2>
        <div className="expense_amount">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}
export default ExpenseItem;
