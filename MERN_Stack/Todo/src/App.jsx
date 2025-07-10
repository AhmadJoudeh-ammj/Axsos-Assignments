// src/App.jsx

import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;