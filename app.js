const experss = require('express');

const app = experss();
const port = process.env.PORT || 3000;



app.listen(port, () => { console.log("Server has Started!! "); });