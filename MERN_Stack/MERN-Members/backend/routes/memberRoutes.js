const express = require('express');
const router = express.Router();
const {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
  updateAttendance
} = require('../controllers/memberController');

// GET /api/members - Get all members
router.get('/', getAllMembers);

// GET /api/members/:id - Get a single member
router.get('/:id', getMemberById);

// POST /api/members - Create a new member
router.post('/', createMember);

// PUT /api/members/:id - Update a member
router.put('/:id', updateMember);

// DELETE /api/members/:id - Delete a member
router.delete('/:id', deleteMember);

// PATCH /api/members/:id/attendance - Update attendance
router.patch('/:id/attendance', updateAttendance);

module.exports = router;

