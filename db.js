const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
};

module.exports = connectDB;
