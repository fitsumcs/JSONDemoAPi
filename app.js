//require('dotenv').config({ path: __dirname + '/Env/.env' });
const experss = require('express');
const mongoose = require('mongoose');


const app = experss();

//set view engine
app.set('view engine', 'ejs');
app.use(experss.static('public'));

const port = process.env.PORT;
const dbUrl = process.env.REMOTE_URL || process.env.LOCAL_DATABSE_URL;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log("Databse Connected!!"));


// make express use json on body 
app.use(experss.json());

// root route 
app.get('/', (req, res) => {
    res.render('index');
});

// api route 
const userApi = require('./routes/users');


app.use('/api', userApi);



app.listen(port, () => { console.log("Server has Started!! "); });