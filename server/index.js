const express = require('express');
require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const morgan = require('morgan');
PORT = process.env.PORT || 5000;

const authMiddleware = require('./middleware/auth');
const errorHandlerMiddleware = require('./middleware/errorMiddleware');
const notFound = require('./middleware/notFound');
const connectDB = require('./db/connectDB');
const cookieParser=require("cookie-parser")

// connectDB()
const app = express(); 
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser())
app.use(cors());
app.use('/api/v1', require('./routes/User'));
app.use('/api/v1/patients', require('./routes/Patient'));
app.use('/api/v1/departments', authMiddleware, require('./routes/Department'));
app.use('/api/v1/doctors', require('./routes/Doctor')); 
app.use('/api/v1/admins',  require('./routes/Admin'));
app.use('/api/v1/feedback', authMiddleware, require('./routes/Feedback'));
app.use('/api/v1/departments', authMiddleware, require('./routes/Department'));
app.use(notFound);
app.use(errorHandlerMiddleware);
const startServer = () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (err) {
    throw new Error(err);
  }
};

startServer();
