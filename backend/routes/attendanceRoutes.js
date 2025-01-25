const express = require('express');
const { markAttendance, getAttendance } = require('../controllers/attendanceController');

const router = express.Router();

// Route to mark attendance
router.post('/mark', markAttendance);

// Route to get attendance records
router.get('/:userId', getAttendance);

module.exports = router;