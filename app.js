require('dotenv').config({ path: __dirname + '/Env/.env' });
const experss = require('express');
const mongoose = require('mongoose');


const app = experss();
const port = process.env.PORT;

mongoose.connect(process.env.LOCAL_DATABSE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log("Databse Connected!!"));


// make express use json on body 
app.use(experss.json());

// root route 
app.get('/', (req, res) => {
    res.send("The Api");
});

// api route 
const userApi = require('./routes/users');


app.use('/api', userApi);



app.listen(port, () => { console.log("Server has Started!! "); });