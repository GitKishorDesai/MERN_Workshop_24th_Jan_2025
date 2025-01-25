const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: 'User',
        required: false
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    status: {
        type: String,
        enum: ['Present', 'Absent'],
        required: true
    }
});

module.exports = mongoose.model('Attendance', attendanceSchema);