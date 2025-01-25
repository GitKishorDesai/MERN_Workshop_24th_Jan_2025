import React from 'react';
import StudentDashboard from '../components/StudentDashboard';

const StudentPage = ({ onLogout }) => {
    return (
        <div>
            <h1>Student Attendance</h1>
            <button onClick={onLogout}>Logout</button>
            <StudentDashboard />
        </div>
    );
};

export default StudentPage;