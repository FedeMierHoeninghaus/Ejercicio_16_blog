/**
 * Este archivo se utiliza en un proyecto donde se está utlizando server-side
 * rendering (ej: con un motor de templates como EJS). Tiene como objetivo
 * mostrar (renderear) páginas que no están directamente relacionandas con
 * una entidad del proyecto.
 *
 * Ejemplos:
 *   - Página de inicio (Home).
 *   - Página de contacto.
 *   - Página con política de privacidad.
 *   - Página con términos y condiciones.
 *   - Página con preguntas frecuentes (FAQ).
 *   - Etc.
 *
 * En caso de estar creando una API, este controlador carece de sentido y
 * no debería existir.
 */
const { Article, Author } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll({
    include: Author,
    order: [["creationDate", "DESC"]],
  });
  const limitedArticles = articles.slice(0, 9);
  res.render("home", { limitedArticles });
}

async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

async function login(req, res) {
  res.render("login");
}

async function signin(req, res) {
  res.render("register");
}
// Otros handlers...
// ...

module.exports = {
  showHome,
  showContact,
  showAboutUs,
  login,
  signin,
};
