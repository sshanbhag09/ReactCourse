import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import ExpenseItems from "./components/Expenses/ExpenseItems";
function App() {
  const title1 = "Toilet Paper";
  const amount1 = 94.12;
  const date1 = new Date(2020, 7, 14);
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];
  const addExpenseHandler = (addExpense) => {
    const expenseData = {
      ...addExpense
    };
    console.log(expenseData, "In app.js");
  };

  return (
    <div>
      <NewExpenses onAddExpenseData={addExpenseHandler} />

      <ExpenseItems items={expenses} />
    </div>
  );
}

export default App;
