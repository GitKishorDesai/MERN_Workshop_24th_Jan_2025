const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

console.log('Database URL:', process.env.DATABASE_URL); // Add this line to check if the URL is being read

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;