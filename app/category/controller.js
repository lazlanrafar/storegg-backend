const Category = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const category = await Category.find();
      res.render("admin/category/view_category", {
        category,
      });
    } catch (error) {
      console.log(error);
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/category/create");
    } catch (error) {
      console.log(error);
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category({ name });
      await category.save();

      res.redirect("/category");
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByIdAndUpdate(id, req.body);

      res.redirect("/category");
    } catch (error) {
      console.log(error);
    }
  },
};
