const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({
    path: './config.env',
});

const DB = process.env.MONGODB_URI;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connection Successful');
    })
    .catch((error) => {
        console.log(error);
    });

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
