import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      title: 'Car Insurance', amount: 800, currentDate: new Date()
    },
    {
      title: 'Bike Insurance', amount: 80, currentDate: new Date()
    },
    {
      title: 'Cycle Insurance', amount: 8, currentDate: new Date()
    }

  ];
  return (
    <div>
      <h2>Hello World!</h2>
      <ExpenseItem
        currentDate={expenses[0].currentDate.toDateString()}
        title={expenses[0].title}
        amount={expenses[0].amount}
      >
      </ExpenseItem>
      <ExpenseItem
        currentDate={expenses[1].currentDate.toDateString()}
        title={expenses[1].title}
        amount={expenses[1].amount} 
        >
      </ExpenseItem>
      <ExpenseItem
        currentDate={expenses[2].currentDate.toDateString()}
        title={expenses[2].title}
        amount={expenses[2].amount} 
        >
      </ExpenseItem>
    </div>
  );
}

export default App;
