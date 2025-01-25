import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Check for hardcoded credentials
        if (userid === 'abc' && password === '123') {
            const userData = { userid, role: 'faculty' }; // Assuming 'faculty' role for hardcoded credentials
            onLogin(userData);
            history.push('/faculty');
            return;
        }

        try {
            const response = await axios.post('/api/auth/login', { userid, password });
            onLogin(response.data);
            history.push(response.data.role === 'faculty' ? '/faculty' : '/student');
        } catch (err) {
            setError('Invalid userid or password');
        }
    };

    return (
        <div>
            <h2>Login to the Attendance Tracker</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>User ID:</label>
                    <input
                        type="text"
                        value={userid}
                        onChange={(e) => setUserid(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;