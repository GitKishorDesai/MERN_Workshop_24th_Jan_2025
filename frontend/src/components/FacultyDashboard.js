import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/index.css'; // Ensure this import is present

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
        <div className="faculty-dashboard">
            <h1>Faculty Dashboard</h1>
            <div>
                <h2>Mark Attendance</h2>
                <form>
                    <div>
                        <input
                            type="text"
                            placeholder="Student USN"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="">Select Status</option>
                            <option value="Present">Present</option>
                            <option value="Absent">Absent</option>
                        </select>
                    </div>
                    <button onClick={handleMarkAttendance}>Mark Attendance</button>
                </form>
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