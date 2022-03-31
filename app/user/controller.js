const User = require("./model");
const bcrypt = require("bcryptjs");

module.exports = {
  viewSignIn: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      await User.find();
      const alert = {
        message: alertMessage,
        status: alertStatus,
      };
      if (req.session.user) {
        res.redirect("/dashboard");
      } else {
        res.render("admin/user/sign-in", {
          alert,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

  actionSignIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (user) {
        const isPassword = await bcrypt.compare(password, user.password);
        if (isPassword) {
          req.session.user = user;
          res.redirect("/dashboard");
        } else {
          req.flash("alertMessage", "Password is wrong");
          req.flash("alertStatus", "danger");
          res.redirect("/");
        }
      } else {
        req.flash("alertMessage", "Email is wrong");
        req.flash("alertStatus", "danger");
        res.redirect("/");
      }
    } catch (error) {
      console.log(error);
    }
  },
};
