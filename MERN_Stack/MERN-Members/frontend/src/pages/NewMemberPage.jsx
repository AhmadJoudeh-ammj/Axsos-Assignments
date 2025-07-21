import { useNavigate, Link } from 'react-router-dom';
import { memberAPI } from '../lib/api';
import { useForm } from '../hooks/useForm';

const NewMemberPage = () => {
  const navigate = useNavigate();

  const validationRules = {
    fullName: { required: true, minLength: 5 },
    email: { required: true, email: true },
    gender: { required: true },
    details: { required: true, minLength: 20 }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    fullName: '',
    email: '',
    gender: '',
    details: ''
  }, validationRules);

  const onSubmit = async (formData) => {
    try {
      await memberAPI.createMember(formData);
      navigate('/');
    } catch (error) {
      console.error('Error creating member:', error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      }
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleEdit = () => {
    // Replace 'id' with actual member ID or get it from somewhere
    const memberId = 'your-member-.id'; // You'll need to replace this
    navigate(`/editmember/${memberId}`);
  };

  return (
    <div className="container">
      <div className="card">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Welcome</h1>
        </div>

        <div className="content-area">
          <h2 className="section-title">New Member</h2>

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

            {/* Full Name */}
            <div className="form-group">
              <div className="form-grid">
                <label htmlFor="fullName" className="form-label form-label-right">
                  Member Full Name:
                </label>
                <div>
                  <input
                    type="text"
                    id="fullName"
                    className={`form-input ${errors.fullName ? 'error' : ''}`}
                    value={values.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                  />
                  {errors.fullName && <div className="error-text">{errors.fullName}</div>}
                  {values.fullName && values.fullName.length < 5 &&
                    <div className="error-text">Name must contain 5 characters!</div>}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <div className="form-grid">
                <label htmlFor="email" className="form-label form-label-right">Email:</label>
                <div>
                  <input
                    type="email"
                    id="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    value={values.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                  {errors.email && <div className="error-text">{errors.email}</div>}
                  {values.email && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email) &&
                    <div className="error-text">Email should be valid and unique</div>}
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="form-group">
              <div className="form-grid">
                <label className="form-label form-label-right">Gender:</label>
                <div>
                  <div className="radio-group">
                    {["Male", "Female", "Prefer not to say"].map(g => (
                      <div className="radio-item" key={g}>
                        <input
                          type="radio"
                          id={g}
                          name="gender"
                          value={g}
                          className="radio-input"
                          checked={values.gender === g}
                          onChange={(e) => handleChange('gender', e.target.value)}
                        />
                        <label htmlFor={g}>{g}</label>
                      </div>
                    ))}
                  </div>
                  {errors.gender && <div className="error-text">{errors.gender}</div>}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="form-group">
              <div className="form-grid">
                <label htmlFor="details" className="form-label form-label-right">Details:</label>
                <div>
                  <textarea
                    id="details"
                    className={`form-textarea ${errors.details ? 'error' : ''}`}
                    value={values.details}
                    onChange={(e) => handleChange('details', e.target.value)}
                  />
                  {errors.details && <div className="error-text">{errors.details}</div>}
                  {values.details && values.details.length < 20 &&
                    <div className="error-text">details should be at least 20 char</div>}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="button-group">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
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

export default NewMemberPage;