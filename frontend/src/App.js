import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import FacultyPage from './pages/FacultyPage';
import StudentPage from './pages/StudentPage';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogin = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Login onLogin={handleLogin} />
                </Route>
                <Route path="/faculty">
                    {user && user.role === 'faculty' ? (
                        <FacultyPage onLogout={handleLogout} />
                    ) : (
                        <Login onLogin={handleLogin} />
                    )}
                </Route>
                <Route path="/student">
                    {user && user.role === 'student' ? (
                        <StudentPage onLogout={handleLogout} />
                    ) : (
                        <Login onLogin={handleLogin} />
                    )}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;