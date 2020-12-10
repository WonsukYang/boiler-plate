const express = require("express");
const app = express();
const port = 8081;
const mongoose = require('mongoose');
const dbname = "test";
const password = "zona2002";

mongoose.connect(`mongodb+srv://wsyang:${password}@boiler-plate.y3qj8.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello, World!'))

app.listen(port, () => console.log(`App listening on port ${port}`))
