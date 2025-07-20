import { useState, useEffect } from 'react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'

function PlayerStatus({ currentGame, onGameChange }) {
  const [playerStatuses, setPlayerStatuses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPlayerStatuses()
  }, [currentGame])

  const fetchPlayerStatuses = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_BASE_URL}/status/game/${currentGame}`)
      setPlayerStatuses(response.data)
      setError('')
    } catch (err) {
      setError('Failed to fetch player statuses. Please try again.')
      console.error('Error fetching player statuses:', err)
    } finally {
      setLoading(false)
    }
  }

  const updatePlayerStatus = async (playerId, newStatus) => {
    try {
      await axios.put(`${API_BASE_URL}/status/${playerId}/game/${currentGame}`, {
        status: newStatus
      })

      // Update local state
      setPlayerStatuses(prev => 
        prev.map(playerStatus => 
          playerStatus.playerId._id === playerId 
            ? { ...playerStatus, status: newStatus }
            : playerStatus
        )
      )
      setError('')
    } catch (err) {
      setError('Failed to update player status. Please try again.')
      console.error('Error updating player status:', err)
    }
  }

  const getStatusButtonClass = (currentStatus, buttonStatus) => {
    const baseClass = 'status-btn'
    const statusClass = buttonStatus.toLowerCase().replace(' ', '-')
    const activeClass = currentStatus === buttonStatus ? 'active' : ''
    return `${baseClass} ${statusClass} ${activeClass}`.trim()
  }

  if (loading) {
    return <div className="loading">Loading player statuses...</div>
  }

  return (
    <div className="player-status-container">
      <div className="player-status-header">
        <h2>Player Status - Game {currentGame}</h2>
        <div className="game-tabs">
          {[1, 2, 3].map(gameNum => (
            <button
              key={gameNum}
              className={`game-tab ${currentGame === gameNum ? 'active' : ''}`}
              onClick={() => onGameChange(gameNum)}
            >
              Game {gameNum}
            </button>
          ))}
        </div>
      </div>
      
      {error && <div className="error">{error}</div>}
      
      {playerStatuses.length === 0 ? (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#6c757d' }}>
          No players found. Add players first to manage their status!
        </div>
      ) : (
        <table className="status-table">
          <thead>
            <tr>
              <th>Team Name</th>
              <th id='actions'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {playerStatuses.map((playerStatus) => (
              <tr key={`${playerStatus.playerId._id}-${currentGame}`}>
                <td>{playerStatus.playerId.name}</td>
                <td>
                  <div className="status-buttons">
                    <button
                      className={getStatusButtonClass(playerStatus.status,'Playing' )}
                      onClick={() => updatePlayerStatus(playerStatus.playerId._id,'Playing')}
                    >
                      Playing
                    </button>
                    <button
                      className={getStatusButtonClass(playerStatus.status, 'Not Playing')}
                      onClick={() => updatePlayerStatus(playerStatus.playerId._id, 'Not Playing')}
                    >
                      Not Playing
                    </button>
                    <button
                      className={getStatusButtonClass(playerStatus.status, 'Undecided')}
                      onClick={() => updatePlayerStatus(playerStatus.playerId._id, 'Undecided')}
                    >
                      Undecided
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
    </div>
  )
}

export default PlayerStatus

