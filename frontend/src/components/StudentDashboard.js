import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        const fetchAttendance = async () => {
            try {
                const response = await axios.get('/api/attendance'); // Adjust the endpoint as necessary
                setAttendance(response.data);
            } catch (error) {
                console.error('Error fetching attendance data:', error);
            }
        };

        fetchAttendance();
    }, []);

    return (
        <div>
            <h1>Attendance Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map((record) => (
                        <tr key={record._id}>
                            <td>{record.date}</td>
                            <td>{record.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentDashboard;