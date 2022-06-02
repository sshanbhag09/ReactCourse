import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";
import Card from "../Ui/Card";
import ExpenseData from "../../ExpenseData";
function createEntry(edata) {
  return (
    <ExpenseItem
      id={edata.id}
      title={edata.title}
      date={edata.date}
      amount={edata.amount}
    />
  );
}
function ExpenseItems(props) {
  return (
    <Card className="expenses">
      {/* <ExpenseItem
        title={props.items.[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
      {ExpenseData.map(createEntry)}
    </Card>
  );
}
export default ExpenseItems;
