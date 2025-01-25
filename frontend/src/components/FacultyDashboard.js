import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacultyDashboard = () => {
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [userId, setUserId] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetchAttendanceRecords();
    }, []);

    const fetchAttendanceRecords = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/attendance/:kish');
            setAttendanceRecords(response.data);
        } catch (error) {
            console.error('Error fetching attendance records:', error);
        }
    };

    const handleMarkAttendance = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/attendance/mark', { userId, date, status });
            console.log('Attendance marked:', response.data);
            fetchAttendanceRecords();
            setUserId('');
            setDate('');
            setStatus('');
        } catch (error) {
            console.error('Error marking attendance:', error);
        }
    };

    return (
        <div>
            <h1>Faculty Dashboard</h1>
            <div>
                <h2>Mark Attendance</h2>
                <input
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="">Select Status</option>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select>
                <button onClick={handleMarkAttendance}>Mark Attendance</button>
            </div>
            <div>
                <h2>Attendance Records</h2>
                <ul>
                    {attendanceRecords.map((record) => (
                        <li key={record._id}>
                            {record.date}: {record.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FacultyDashboard;