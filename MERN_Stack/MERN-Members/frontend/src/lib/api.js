import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const memberAPI = {
  // Get all members
  getAllMembers: () => api.get('/members'),
  
  // Get a single member
  getMemberById: (id) => api.get(`/members/${id}`),
  
  // Create a new member
  createMember: (memberData) => api.post('/members', memberData),
  
  // Update a member
  updateMember: (id, memberData) => api.put(`/members/${id}`, memberData),
  
  // Delete a member
  deleteMember: (id) => api.delete(`/members/${id}`),
  
  // Update attendance
  updateAttendance: (id, attendance) => api.patch(`/members/${id}/attendance`, { attendance }),
};

export default api;

