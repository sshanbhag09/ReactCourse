import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [titleEntry, setTitleEntry] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [dateEntry, setDateEntry] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // });
  const titleChangeHandler = (event) => {
    setTitleEntry(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateEntry(event.target.value);
  };
  // const titleChangeHandler = (event) => {
  //   // setEnteredTitle(event.target.value);
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value
  //   // });
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   //setEnteredAmount(event.target.value);
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredAmount: event.target.value };
  //   });
  // };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleEntry,
      amount: enteredAmount,
      date: new Date(dateEntry)
    };

    props.onSaveExpenseData(expenseData);
    setTitleEntry("");
    setEnteredAmount("");
    setDateEntry("");
  };
  // const dateChangeHandler = (event) => {
  //   // setEnteredDate(event.target.value);
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredDate: event.target.value };
  //   });
  // };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={titleEntry} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={dateEntry}
            min="2020-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
