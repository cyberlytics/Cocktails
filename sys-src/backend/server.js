const express = require("express")
const corse = require("cors")
const session = require("express-session")

//Routes
const cocktails = require("./api/cocktails.route.js")
const login = require("./api/login.route.js")
const logout = require("./api/logout.route.js")
const user = require("./api/user.route.js")

const app = express()

app.use(corse())
app.use(express.json())


// Allow Api Access for webpage
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});


app.use(session({
    key: '2sdfsdfjh55k2jnabccf2e',
    secret: 'alkdjfalsd167345324d',
    resave: false,
    saveUninitialized : false,
    cookie: {
        maxAge: (1000 * 3600 * 2),
        httpOnly: false
    }
}));

//Bind routes to their controller
app.use("/api/login", login);
app.use("/api/v1/cocktailsmixer/cocktails", cocktails);
app.use("/api/logout", logout);
app.use("/api/user", user)

//app.use("*", (req, res) => {res.status(400).json({error: "not found"})});

app.get('/', (req, res) => {
    res.send('Hello to Memories API')
})

module.exports = app