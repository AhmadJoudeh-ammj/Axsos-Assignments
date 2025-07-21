import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { memberAPI } from '../lib/api';
import { useForm } from '../hooks/useForm';

const EditMemberPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const validationRules = {
    fullName: { 
      required: true, 
      minLength: 5 
    },
    email: { 
      required: true, 
      email: true 
    },
    gender: { 
      required: true 
    },
    details: { 
      required: true, 
      minLength: 20 
    }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit, setValues } = useForm({
    fullName: '',
    email: '',
    gender: '',
    details: ''
  }, validationRules);

  useEffect(() => {
    fetchMember();
  }, [id]);

  const fetchMember = async () => {
    try {
      const response = await memberAPI.getMemberById(id);
      const member = response.data;
      setValues({
        fullName: member.fullName,
        email: member.email,
        gender: member.gender,
        details: member.details
      });
    } catch (error) {
      setError('Failed to fetch member details');
      console.error('Error fetching member:', error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (formData) => {
    try {
      await memberAPI.updateMember(id, formData);
      navigate('/');
    } catch (error) {
      console.error('Error updating member:', error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      }
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <div className="card">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Edit Member</h1>
        </div>

        <div className="content-area">
          <h2 className="section-title">Edit Member</h2>

          {/* Validation Messages */}
          <div className="validation-box">
            <div className="validation-box-title">All fields are required</div>
            <div className="validation-box-content">
              <div>member name contains 5 char</div>
              <div>email should be unique and valid</div>
              <div>details should be at least 20 char</div>
            </div>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit);
          }} className="form-container">
            
            {/* Member Full Name */}
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Member Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                className={`form-input ${errors.fullName ? 'error' : ''}`}
                value={values.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
              />
              {errors.fullName && (
                <div className="error-text">{errors.fullName}</div>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                value={values.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              {errors.email && (
                <div className="error-text">{errors.email}</div>
              )}
            </div>

            {/* Gender */}
            <div className="form-group">
              <label className="form-label">Gender:</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    className="radio-input"
                    checked={values.gender === 'Male'}
                    onChange={(e) => handleChange('gender', e.target.value)}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="radio-item">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    className="radio-input"
                    checked={values.gender === 'Female'}
                    onChange={(e) => handleChange('gender', e.target.value)}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="radio-item">
                  <input
                    type="radio"
                    id="prefer-not"
                    name="gender"
                    value="Prefer not to say"
                    className="radio-input"
                    checked={values.gender === 'Prefer not to say'}
                    onChange={(e) => handleChange('gender', e.target.value)}
                  />
                  <label htmlFor="prefer-not">Prefer not to say</label>
                </div>
              </div>
              {errors.gender && (
                <div className="error-text">{errors.gender}</div>
              )}
            </div>

            {/* Details */}
            <div className="form-group">
              <label htmlFor="details" className="form-label">
                Details:
              </label>
              <textarea
                id="details"
                className={`form-textarea ${errors.details ? 'error' : ''}`}
                value={values.details}
                onChange={(e) => handleChange('details', e.target.value)}
              />
              {errors.details && (
                <div className="error-text">{errors.details}</div>
              )}
            </div>

            {/* Buttons */}
            <div className="button-group">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Updating...' : 'Edit'}
              </button>
              <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMemberPage;

