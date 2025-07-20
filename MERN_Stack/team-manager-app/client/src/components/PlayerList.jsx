import { useState, useEffect } from 'react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'

function PlayerList({ onAddPlayer }) {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPlayers()
  }, [])

  const fetchPlayers = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_BASE_URL}/players`)
      setPlayers(response.data)
      setError('')
    } catch (err) {
      setError('Failed to fetch players. Please try again.')
      console.error('Error fetching players:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (playerId, playerName) => {
    // Show confirmation dialog
    const isConfirmed = window.confirm(
      `Are you sure you want to delete "${playerName}"? This action cannot be undone.`
    );

    if (!isConfirmed) {
      return; // User cancelled, exit function
    }

    try {
      // Delete from MongoDB via your API
      await axios.delete(`${API_BASE_URL}/players/${playerId}`);

      // Remove from local state to update UI immediately
      setPlayers(prevPlayers =>
        prevPlayers.filter(player => player._id !== playerId)
      );

      // Clear any previous errors
      setError('');

      // Optional: Show success message
      console.log(`Player "${playerName}" deleted successfully`);

    } catch (err) {
      // Handle errors
      setError('Failed to delete player. Please try again.');
      console.error('Error deleting player:', err);
    }
  };

  if (loading) {
    return <div className="loading">Loading players...</div>
  }

  return (
    <div className="player-list-container">
      <div className="player-list-header">
        <h2>List</h2>
        <button className="add-player-btn" onClick={onAddPlayer}>
          Add Player
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      {players.length === 0 ? (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#6c757d' }}>
          No players found. Add your first player to get started!
        </div>
      ) : (
        <table className="player-table">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Preferred Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player._id}>
                <td>{player.name}</td>
                <td>{player.preferredPosition}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(player._id, player.name)}
                    style={{
                      backgroundColor: '#dc3545'
                    }}
                  >Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default PlayerList