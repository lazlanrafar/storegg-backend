const Category = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = {
        message: alertMessage,
        status: alertStatus,
      };
      const category = await Category.find();
      res.render("admin/category/view_category", {
        category,
        alert,
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/category/create");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category({ name });
      await category.save();

      req.flash("alertMessage", "Success Create Category");
      req.flash("alertStatus", "success");

      res.redirect("/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },
  viewEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findById(id);
      res.render("admin/category/edit", {
        category,
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      await Category.findByIdAndUpdate(id, req.body);

      res.redirect("/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Category.findByIdAndDelete(id);

      res.redirect("/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },
};
