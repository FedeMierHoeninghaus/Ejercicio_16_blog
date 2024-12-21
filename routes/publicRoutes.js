const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/", pagesController.showHome);
router.get("/contact", pagesController.showContact);
router.get("/AboutAs", pagesController.showAboutUs);
router.get("/login", pagesController.login);
router.get("/signin", pagesController.signin);

module.exports = router;
