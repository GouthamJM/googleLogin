const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport")
require("./server");
app.use(cors());
app.use(passport.initialize());


passport.serializeUser((user, done) =>{
    done(null, user)
});

app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));
app.get("/google/callback",
    passport.authenticate("google"),
        (req, res) => {
         console.log(res,"response")
         res.json(`Welcome to amby ${req.user.email}`);
            //  res.redirect('https://localhost:3000/login');
        });







app.listen((5000),(req,res)=>{
    console.log("working proparly....");
})