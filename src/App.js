import TaskListComponent from "./components/container/task_list";

// Greeting from "./components/pure/greeting";

function App() {
  //return <Greeting name="Héctor Manuel" />;
  return (
    <div className="bg-white dark:bg-slate-900 h-screen">
      <header className="container mx-auto px-4">
        <TaskListComponent />
      </header>
    </div>
  );
}

export default App;
