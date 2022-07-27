import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      title: 'Car Insurance', amount: 800, date1: new Date(),
      title: 'Bike Insurance', amount: 80, date1: new Date(),
      title: 'Cycle Insurance', amount: 8, date1: new Date()
    }
  ]
  return (
    <div>
      <h2>Hello World!</h2>
      <ExpenseItem date1={expenses[0].date1.toDateString()} title={expenses[0].title} amount={expenses[0].amount} ></ExpenseItem>
    </div>
  );
}

export default App;
