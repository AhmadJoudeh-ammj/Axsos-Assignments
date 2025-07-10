import Tabs from './components/Tabs';
import './App.css'; // For global styles

function App() {
  const tabData = [
    {
      label: 'HTML',
      content: (
        <div>
          <h2>HyperText Markup Language</h2>
          <p>
            The standard markup language for documents designed to be displayed in a web browser.
          </p>
          <button onClick={() => alert('Html is backbone!')}>Click me!</button>

        </div>
      ),
      callback: (label) => alert(`You clicked on the ${label} tab!`),
    },
    {
      label: 'CSS',
      content: (
        <div>
          <h2>Cascading Style Sheets</h2>
          <p>
            A style sheet language used for describing the presentation of a document written in a markup language like HTML.
          </p>
          <button onClick={() => alert('CSS is beautiful!')}>Click me!</button>

        </div>
      ),
      callback: (label) => alert(`You clicked on the ${label} tab!`),

    },
    {
      label: 'JavaScript',
      content: (
        <div>
          <h2>The Language of the Web</h2>
          <p>
            JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
          </p>
          <button onClick={() => alert('JS is awesome!')}>Click me!</button>
        </div>
      ),
      callback: (label) => alert(`You clicked on the ${label} tab!`),
    },
  ];

  return (
    <div className="App">
      <header>
        <h1>React Tabs Component </h1>
      </header>
      <main>
        <Tabs tabs={tabData} />
      </main>
    </div>
  );
}

export default App;