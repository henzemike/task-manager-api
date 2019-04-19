const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

// parse incoming json to an object to access in request handlers
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;