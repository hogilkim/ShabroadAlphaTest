const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const UserController = require('./controllers/UserController');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); //body-parser


if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}


app.use("/files", express.static(path.resolve(__dirname, "files")));
app.use(routes);

try {
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('MongoDB connected successfully!');
} catch (error) {
    console.log(error);
}


app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})
