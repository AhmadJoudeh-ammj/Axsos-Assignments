import { useState } from 'react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'

function AddPlayer({ onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    preferredPosition: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState('')

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Player name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Player name must be at least 2 characters long'
    }

    // Preferred position validation
    if (!formData.preferredPosition.trim()) {
      newErrors.preferredPosition = 'Preferred position is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }

    // Clear submit messages
    setSubmitError('')
    setSubmitSuccess('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError('')
    setSubmitSuccess('')

    try {
      await axios.post(`${API_BASE_URL}/players`, {
        name: formData.name.trim(),
        preferredPosition: formData.preferredPosition.trim()
      })

      setSubmitSuccess('Player added successfully!')
      
      // Reset form
      setFormData({
        name: '',
        preferredPosition: ''
      })
      setErrors({})

      // Redirect back to list after 1.5 seconds
      setTimeout(() => {
        onBack()
      }, 1500)

    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setSubmitError(err.response.data.message)
      } else {
        setSubmitError('Failed to add player. Please try again.')
      }
      console.error('Error adding player:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name.trim().length >= 2 && formData.preferredPosition.trim().length > 0

  return (
    <div className="add-player-container">
      <h2>Add Player</h2>
      
      {submitError && <div className="error">{submitError}</div>}
      {submitSuccess && <div className="success">{submitSuccess}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Player Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter player name"
            maxLength={50}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
          <div className="validation-note"></div>
        </div>

        <div className="form-group">
          <label htmlFor="preferredPosition">Preferred Position:</label>
          <input
            type="text"
            id="preferredPosition"
            name="preferredPosition"
            value={formData.preferredPosition}
            onChange={handleInputChange}
            placeholder="e.g., Forward, Midfielder, Goalkeeper"
            maxLength={30}
          />
          {errors.preferredPosition && <div className="error-message">{errors.preferredPosition}</div>}
          <div className="validation-note">* Optional</div>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="submit-btn"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'ADD'}
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={onBack}
            disabled={isSubmitting}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPlayer;

