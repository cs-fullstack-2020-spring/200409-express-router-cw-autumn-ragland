// 20-04-09 Express Router CW
let express = require('express');
let app = express();

let api = require('./routes/api.js');
let admin = require('./routes/admin.js');

app.use('/api', api);
app.use('/admin', admin);

app.listen(8000, () => {
    console.log('Listening on port 8000')
})