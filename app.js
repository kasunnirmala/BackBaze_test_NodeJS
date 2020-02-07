const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const cors = require('cors');
// require('dotenv/config');
const admin = require('firebase');

app.use(cors());
app.use(bodyParse.json());

var firebaseConfig = {
    apiKey: 'AIzaSyC-OXjP1PsC_18Jds5dbVYmgdM7a6Vubdc',
    authDomain: 'fir-sample-6990f.firebaseapp.com',
    databaseURL: 'https://fir-sample-6990f.firebaseio.com',
    storageBucket: 'fir-sample-6990f.appspot.com'
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// const userRoute = require('./routes/users');

// app.use('/users', userRoute);
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log("DB connected") });
app.get('/', (req, res) => {
    let docRef = db.collection('users').doc('alovelace');

    let setAda = docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    });

});
app.listen(3000);