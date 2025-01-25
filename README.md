# Attendance Tracking App

## Overview
This is a MERN (MongoDB, Express, React, Node.js) application designed for attendance tracking. The application allows faculty members to mark and view attendance, while students can only view their attendance records.

## Features
- User authentication with login functionality.
- Faculty dashboard for marking and viewing attendance.
- Student dashboard for viewing attendance.
- Secure backend with token-based authentication.

## Project Structure
```
attendance-tracking-app
├── backend
│   ├── controllers
│   │   └── authController.js
│   │   └── attendanceController.js
│   ├── models
│   │   └── User.js
│   │   └── Attendance.js
│   ├── routes
│   │   └── authRoutes.js
│   │   └── attendanceRoutes.js
│   ├── config
│   │   └── db.js
│   ├── server.js
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── Login.js
│   │   │   └── FacultyDashboard.js
│   │   │   └── StudentDashboard.js
│   │   ├── pages
│   │   │   └── FacultyPage.js
│   │   │   └── StudentPage.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
├── package.json
├── .env
└── README.md
```

## Installation

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your `.env` file with the necessary environment variables (e.g., database connection string).
4. Start the server:
   ```
   node server.js
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Usage
- Access the application in your browser at `http://localhost:3000`.
- Use the login page to authenticate as either a faculty member or a student.
- Faculty members can mark attendance and view records, while students can only view their attendance.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or features.

## License
This project is licensed under the MIT License.