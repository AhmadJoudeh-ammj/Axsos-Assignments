import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { memberAPI } from '../lib/api';

const MemberDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMember();
  }, [id]);

  const fetchMember = async () => {
    try {
      const response = await memberAPI.getMemberById(id);
      setMember(response.data);
    } catch (error) {
      setError('Failed to fetch member details');
      console.error('Error fetching member:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      try {
        await memberAPI.deleteMember(id);
        navigate('/');
      } catch (error) {
        console.error('Error deleting member:', error);
      }
    }
  };

  const handleBackToDashboard = () => {
    navigate('/');
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!member) return <div className="error">Member not found</div>;

  return (
    <div className="container">
      <div className="card">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Member Details</h1>
        </div>

        <div className="content-area">
          <h2 className="section-title">Member Details</h2>

          <div className="details-grid">
            {/* Member Name */}
            <div className="details-label">Member name</div>
            <div className="details-value">{member.fullName}</div>

            {/* Email */}
            <div className="details-label">Email</div>
            <div className="details-value">{member.email}</div>

            {/* Details */}
            <div className="details-label">Details</div>
            <div className="details-value">{member.details}</div>
          </div>

          {/* Action Buttons */}
          <div className="button-group">
            <Link to={`/editmember/${member._id}`} className="btn btn-secondary">
              Edit
            </Link>
            <button 
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button 
              className="btn btn-secondary"
              onClick={handleBackToDashboard}
            >
              Back To Dashboard
            </button>
          </div>

          {/* Additional Note */}
          <div className="purple-note-box">
            <div className="purple-note-title">Reuse the same delete component</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetailsPage;

