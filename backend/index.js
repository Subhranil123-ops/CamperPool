require("dotenv").config()
const express = require("express");
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: "https://localhost:5173",
    credentials: true,
}));

const port = process.env.PORT || 3000;
const path = require("path");

const { main } = require('./config/db.js');
const auth = require('./Routes/auth.js');
const dashboard = require('./Routes/dashboard.js');
const ExpressError = require("./utils/ExpressError.js");
const methodOverride = require("method-override");
app.use(methodOverride('_method'));
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/userSchema.js");
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}

const sslOptions = {
    key: fs.readFileSync("./certs/localhost+2-key.pem"),
    cert: fs.readFileSync("./certs/localhost+2.pem")
}

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
    res.locals.success = req.flash("success") || [];
    res.locals.error = req.flash("error") || [];
    res.locals.user = req.user || null;
    next();
});


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth", auth);
app.use("/", dashboard);

app.use((err, req, res, next) => {
    console.error("REAL ERROR:", err);
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).json(
        {
            success: false,
            message,
        }
    );
});

app.get("/", (req, res) => {
    res.redirect("/rides");
});
main()
    .then(() => https.createServer(sslOptions, app).listen(port, () => console.log("APP is connected to the port: ", port)))
    .catch((err) => console.log(err));
