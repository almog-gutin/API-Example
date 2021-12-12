const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/dxc-book-store';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL);

        console.log('MongoDB database connected!');
    } catch (err) {
        console.log('MongoDB database connection error!');

        process.exit(1);
    }
};

connectToMongoDB();
