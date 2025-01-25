const Attendance = require('../models/Attendance');

exports.markAttendance = async (req, res) => {
    const { userId, date, status } = req.body;

    console.log('Received request to mark attendance:', { userId, date, status });

    try {
        const attendanceRecord = new Attendance({
            userId,
            date,
            status
        });

        await attendanceRecord.save();
        res.status(201).json({ message: 'Attendance marked successfully' });
    } catch (error) {
        console.error('Error marking attendance:', error);
        res.status(500).json({ message: 'Error marking attendance', error });
    }
};

exports.getAttendance = async (req, res) => {
    const { userId } = req.params;

    try {
        const attendanceRecords = await Attendance.find({ userId });
        res.status(200).json(attendanceRecords);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving attendance records', error });
    }
};