const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser')
const db = require('./config/config')
const app = express();
const port = 3004

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true,limit: '50000mb', parameterLimit: 100000000000000000 }))
app.use(bodyParser.json({ limit: '50000mb' }));

db.authenticate().then(() => { console.log('connected'); });

const routes = require("./routes");

app.use("/", routes);

db.sync();

app.listen(port || process.env.port, () => {
    console.log(`server started on port ${port}`)
})
module.exports = app;