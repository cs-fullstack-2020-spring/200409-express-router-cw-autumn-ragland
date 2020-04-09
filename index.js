// 20-04-09 Express Router CW

// create server
let express = require('express');
let app = express();

// import route modules
let api = require('./routes/api.js');
let admin = require('./routes/admin.js');

// mount routes
app.use('/api', api);
app.use('/admin', admin);

// allow server to listen on port 
app.listen(8000, () => {
    console.log('Listening on port 8000')
})