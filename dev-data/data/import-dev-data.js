const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs')
const Tour = require('./../../models/tourModel')

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


// Read json file
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));
const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('Data successfully loaded!');
    } catch (error) {
        console.log(error);
    }
}

// Delete all data from collection
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Deleted successfully');
    } catch (error) {
        console.log(error);
    }
}

if(process.argv[2] === '--import'){
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}
