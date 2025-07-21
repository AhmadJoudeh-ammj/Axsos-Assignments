import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewMemberPage from './pages/NewMemberPage';
import EditMemberPage from './pages/EditMemberPage';
import MemberDetailsPage from './pages/MemberDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newmember" element={<NewMemberPage />} />
          <Route path="/editmember/:id" element={<EditMemberPage />} />
          <Route path="/member/:id" element={<MemberDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

