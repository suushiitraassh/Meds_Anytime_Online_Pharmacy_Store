const express = require("express");
const router = express.Router();
const userController = require("./../Controller/userController");
const authController = require("./../Controller/authController");

router.route("/create").post(userController.createUser);
// router.route("/showUsers").get(authController.protect,authController.restrictTo('dev'),userController.getAllUsers);
router.route("/showUsers").get(userController.getAllUsers);
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router
  .route("/forgotPassword")
  .post(authController.protect, authController.forgotPassword);
router.route("/resetPassword/:token").patch(authController.resetPassword);

router.route("/").get((req, res) => {
  res.sendFile(path.join(__dirname, "./View/index.html"));
});

router.route("/signUp").get((req, res) => {
  res.sendFile(path.join(__dirname, "./View/signup.html"));
});

router.route("/logIn").get((req, res) => {
  res.sendFile(path.join(__dirname, "./View/login.html"));
});

router.route('/cart').get((req, res) => {
    res.sendFile(path.join(__dirname, './View/index1.html'));
})
module.exports = router;
