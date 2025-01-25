import React from 'react';
import FacultyDashboard from '../components/FacultyDashboard';

const FacultyPage = ({ onLogout }) => {
    return (
        <div>
            <h1>Faculty Attendance Management</h1>
            <button onClick={onLogout}>Logout</button>
            <FacultyDashboard />
        </div>
    );
};

export default FacultyPage;