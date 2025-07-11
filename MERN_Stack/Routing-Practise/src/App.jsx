import { Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import StyledWord from './components/StyledWord';
import Index from './components/index';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Home />} />
      <Route path="/:value" element={<CheckValue />} />
      <Route path="/:word/:color/:bgColor" element={<StyledWord />} />
    </Routes>
  );
}

// Helper component to choose between Number or Word
function CheckValue() {
  const { value } = useParams();
  return isNaN(+value) ? <Word /> : <Number />;
}