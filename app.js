
const express = require('express');

const app = express();

const morgan = require('morgan');
//Routers
const tourRouter=require('./routes/tourRoutes');
const userRouter=require('./routes/userRoutes');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello from the middle ware');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//server
module.exports=app;
