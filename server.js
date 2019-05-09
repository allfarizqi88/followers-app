
// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(__dirname + '/dist'));

// app.all('*', (req, res) => {
//   res.status(200).sendFile(__dirname + '/dist/index.html');
// });

// app.listen(process.env.PORT || 8080);

//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/testheroku-angular-app'));
 
app.get('/*', function(req,res) {
 
res.sendFile(path.join(__dirname+'/testheroku-angular-app/index.html'));
});
 
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);