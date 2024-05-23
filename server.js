const express = require('express');
const  db = require('./config/db.config')

const Router = require("./routes/routes")

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());


app.use('/' ,Router )

// Server listening
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
