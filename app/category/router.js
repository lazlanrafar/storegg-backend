var express = require("express");
var router = express.Router();
const {
  index,
  viewCreate,
  actionCreate,
  viewEdit,
  actionEdit,
  actionDelete,
} = require("./controller");
const { isLogin } = require("../middleware/auth");

router
  .use(isLogin)
  .get("/", index)
  .get("/create", viewCreate)
  .post("/create", actionCreate)
  .get("/edit/:id", viewEdit)
  .put("/edit/:id", actionEdit)
  .delete("/delete/:id", actionDelete);

module.exports = router;
