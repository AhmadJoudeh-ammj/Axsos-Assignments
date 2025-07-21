import { useState, useEffect,} from 'react';
import { Link } from 'react-router-dom';
import { memberAPI } from '../lib/api';

const HomePage = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await memberAPI.getAllMembers();
      setMembers(response.data);
    } catch (error) {
      setError('Failed to fetch members');
      console.error('Error fetching members:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAttendanceChange = async (memberId, currentAttendance) => {
    try {
      const newAttendance = currentAttendance === 'Present' ? 'Absent' : 'Present';
      await memberAPI.updateAttendance(memberId, newAttendance);
      
      // Update local state
      setMembers(prev => prev.map(member => 
        member._id === memberId 
          ? { ...member, attendance: newAttendance }
          : member
      ));
    } catch (error) {
      console.error('Error updating attendance:', error);
    }
  };

  const handleDelete = async (memberId) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      try {
        await memberAPI.deleteMember(memberId);
        setMembers(prev => prev.filter(member => member._id !== memberId));
      } catch (error) {
        console.error('Error deleting member:', error);
      }
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error && members.length === 0) return <div className="error">{error}</div>;

  // Filter members to show present and absent separately
  const presentMembers = members.filter(member => member.attendance === 'Present');
  const absentMembers = members.filter(member => member.attendance === 'Absent');

  return (
    <div className="container">
      <div className="card">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Welcome</h1>
        </div>

        <div className="content-area">
          <h2 className="section-title">Member List</h2>

          {members.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '32px', color: '#6b7280' }}>
              No members found. Add your first member!
            </p>
          ) : (
            <>
              {/* Present Members Table */}
              {presentMembers.length > 0 && (
                <table className="member-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Attendance</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {presentMembers.map((member) => (
                      <tr key={member._id}>
                        <td>
                          <div className="checkbox-container">
                            <input
                              type="checkbox"
                              className="checkbox-input"
                              checked={member.attendance === 'Present'}
                              onChange={() => handleAttendanceChange(member._id, member.attendance)}
                            />
                            <Link 
                              to={`/member/${member._id}`}
                              className="link"
                            >
                              {member.fullName}
                            </Link>
                          </div>
                        </td>
                        <td className="attendance-present">
                          Present
                        </td>
                        <td>
                          <button
                            className="btn btn-danger btn-small"
                            onClick={() => handleDelete(member._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* Add Member Button */}
              <div style={{ marginBottom: '32px' }}>
                <Link to="/newmember" className="btn btn-primary">
                  Add Member
                </Link>
              </div>

              {/* Absent Members Table */}
              {absentMembers.length > 0 && (
                <table className="member-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Attendance</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {absentMembers.map((member) => (
                      <tr key={member._id}>
                        <td>
                          <div className="checkbox-container">
                            <input
                              type="checkbox"
                              className="checkbox-input"
                              checked={member.attendance === 'Present'}
                              onChange={() => handleAttendanceChange(member._id, member.attendance)}
                            />
                            <Link 
                              to={`/member/${member._id}`}
                              className="link"
                            >
                              {member.fullName}
                            </Link>
                          </div>
                        </td>
                        <td className="attendance-absent">
                          Absent
                        </td>
                        <td>
                          <button
                            className="btn btn-danger btn-small"
                            onClick={() => handleDelete(member._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;