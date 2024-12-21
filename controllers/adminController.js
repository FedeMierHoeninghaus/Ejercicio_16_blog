const { Admin } = require("../models");

// Display a listing of the resource.
async function showAdmin(req, res) {
  res.render("admin");
}

module.exports = {
  showAdmin,
};
