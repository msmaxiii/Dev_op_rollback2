const express = require('express');
const cors = require('cors');
const app = express();
const path =require('path')



app.use(express.json())
app.use(cors());

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '6a06f9c9ec524ab8ad8cee15ffce3cc1',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', (req, res) => {
    rollbar.log("Accessed HTML successfully")
    res.sendFile(path.join(__dirname, '/index.html'))
    
})