import { useState } from 'react'
import './App.css'
import PlayerList from './components/PlayerList'
import AddPlayer from './components/AddPlayer'
import PlayerStatus from './components/PlayerStatus'

function App() {
  const [currentView, setCurrentView] = useState('list')
  const [currentGame, setCurrentGame] = useState(1)

  const renderContent = () => {
    switch (currentView) {
      case 'list':
        return <PlayerList onAddPlayer={() => setCurrentView('add')} />
      case 'add':
        return <AddPlayer onBack={() => setCurrentView('list')} />
      case 'status':
        return <PlayerStatus currentGame={currentGame} onGameChange={setCurrentGame} />
      default:
        return <PlayerList onAddPlayer={() => setCurrentView('add')} />
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Team Management</h1>
        <nav className="navigation">
          <button 
            className={currentView === 'list' ? 'nav-button active' : 'nav-button'}
            onClick={() => setCurrentView('list')}
          >
            Manage Players
          </button>
          <button 
            className={currentView === 'status' ? 'nav-button active' : 'nav-button'}
            onClick={() => setCurrentView('status')}
          >
            Manage Player Status
          </button>
        </nav>
      </header>
      <main className="app-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App

