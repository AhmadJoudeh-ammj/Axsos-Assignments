import ColorBoxMaker from './components/ColorBoxMaker';
import './App.css'; // You can use this for global styles

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Box Creator</h1>
      </header>
      <main>
        <ColorBoxMaker />
      </main>
    </div>
  );
}

export default App;