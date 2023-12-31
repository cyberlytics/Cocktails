import express from "express"
import corse from "cors"
import session from 'express-session';

//Routes
import cocktails from "./api/cocktails.route.js"
import login from "./api/login.route.js"
import logout from "./api/logout.route.js";
import user from "./api/user.route.js";

const app = express()

app.use(corse())
app.use(express.json())

// Allow Api Access for webpage
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
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

app.use("/api/login", login);
app.use("/api/v1/cocktailsmixer/cocktails", cocktails);
app.use("/api/logout", logout);
app.use("/api/user", user)

app.use("*", (req, res) => {res.status(400).json({error: "not found"})});

export default app