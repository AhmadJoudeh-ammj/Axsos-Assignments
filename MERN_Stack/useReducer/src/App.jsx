import ValidatedForm from './components/ValidatedForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Form Validation with <code>(useReducer)</code></h1>
      </header>
      <main>
        <ValidatedForm />
      </main>
    </div>
  );
}

export default App;