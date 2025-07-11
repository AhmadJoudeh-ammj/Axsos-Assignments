import { TodoProvider } from './context/TodoContext'; // Note the .jsx is not needed
import TodoList from './components/TodoList';
import AddTaskForm from './components/AddTaskForm';

export default function App() {
  return (
    <TodoProvider>
      <div className="App">
        <header>
          <h1>To-Do List (useReducer with Context)</h1>
        </header>
        <main className="todoWrapper">
          <AddTaskForm />
          <TodoList />
        </main>
      </div>
    </TodoProvider>
  );
}