let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let cors = require('cors');
let app = express();
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());
let corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'UPDATE'],
    credentials: true
};
let userId = 0;

app.use(bodyParser());
app.use(cookieParser());
app.use(cors(corsOptions));

app.get('/login', function(req, res) {
    res.sendfile("client/login.html");
});

app.get('/userprofile', function(req, res) {
    const token = req.cookies.token;
    if(token !== undefined){
        res.sendfile("client/userprofile.html");
    }else{
        res.redirect('/login');
    }
});

app.post('/login', function(req, res) {
    console.log(req.body.param)
    userId++;
    res.send({id:userId});
});

app.listen(8080);
console.log('Listening on port 8080...');
