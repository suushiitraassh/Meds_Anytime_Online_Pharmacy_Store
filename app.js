const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const userRouter = require("./Routes/userRoute");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const appError = require("./Utils/AppError");
const globalErrorHandler = require("./Controller/errorController");
const con = require("./Controller/userController");
const authController = require('./Controller/authController')


app.use("/api/v1/users", userRouter);
app.use(express.static('View'));
app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, './View/index1.html'));
})

app.get('/',(req, res) => {
  res.sendFile(path.join(__dirname, './View/index.html'));
})

app.get("/signUp", (req, res) => {
  res.sendFile(path.join(__dirname, "./View/signup.html"));
});

app.get("/login", (req, res) => {
  
  res.sendFile(path.join(__dirname, "./View/login.html"));
});

app.get('/api/v1/users/showUsers', (req, res) => {
    res.json(con.getAllUsers());
})

app.all("*", (req, res, next) => {
  next(new appError(`error, ${req.originalUrl} not found on the server`, 400));
});

app.use(globalErrorHandler);

module.exports = app;
