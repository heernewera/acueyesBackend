const express = require('express');
const port = 8080;
const app = express();
const path = require('path');
const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//database
const db = require('./config/mongoose');

//image path

app.use('/upload', express.static(path.join(__dirname, '/upload')));

//passport
const session = require('express-session');
const passport = require('passport');
const passportjwt = require('./config/passport-jwt');
app.use(session({
    name: 'jemi',
    secret: 'jwt',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000
    }
}))
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/api/user', require('./routes/user_routes'));
app.use('/api/blog', require('./routes/blog_routes'));
app.use('/api/comment', require('./routes/comment_routes'));

app.listen(port, (e) => {
    if (e) {
        console.log('Page Not Running');
    }
    console.log('Page Is Running On Port', port);
});

