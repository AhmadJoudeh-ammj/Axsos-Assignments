const Member = require('../models/Member');

// Get all members
const getAllMembers = async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single member
const getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new member
const createMember = async (req, res) => {
  try {
    const { fullName, email, gender, details } = req.body;
    
    // Check if email already exists
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const member = new Member({
      fullName,
      email,
      gender,
      details
    });

    const savedMember = await member.save();
    res.status(201).json(savedMember);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: errors.join(', ') });
    }
    res.status(500).json({ message: error.message });
  }
};

// Update a member
const updateMember = async (req, res) => {
  try {
    const { fullName, email, gender, details, attendance } = req.body;
    
    // Check if email already exists for another member
    if (email) {
      const existingMember = await Member.findOne({ email, _id: { $ne: req.params.id } });
      if (existingMember) {
        return res.status(400).json({ message: 'Email already exists' });
      }
    }

    const member = await Member.findByIdAndUpdate(
      req.params.id,
      { fullName, email, gender, details, attendance },
      { new: true, runValidators: true }
    );

    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    res.json(member);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: errors.join(', ') });
    }
    res.status(500).json({ message: error.message });
  }
};

// Delete a member
const deleteMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update attendance
const updateAttendance = async (req, res) => {
  try {
    const { attendance } = req.body;
    const member = await Member.findByIdAndUpdate(
      req.params.id,
      { attendance },
      { new: true }
    );

    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
  updateAttendance
};

