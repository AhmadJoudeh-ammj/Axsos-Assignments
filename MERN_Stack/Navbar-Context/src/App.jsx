import React from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import './App.css'; // Import the global styles

function App() {
  return (
    // The Wrapper provides context but doesn't have its own styles
    <Wrapper>
      {/* The .App div is our main container */}
      <div className="App">
        {/* Navbar sits directly inside .App, allowing it to be full-width */}
        <Navbar />

        {/* All other content goes inside a 'main' tag with the .mainContent class */}
        <main className="mainContent">
          <FormWrapper />
        </main>
      </div>
    </Wrapper>
  );
}

export default App;