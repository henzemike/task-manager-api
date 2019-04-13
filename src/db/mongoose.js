const mongoose = require('mongoose');

// first parameter takes the connection url and the DB name
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});