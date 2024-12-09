const express = require("express");
const routes = express.Router();
const usuarioController = require("../controllers/usuarioController");



routes.get("/usuarios", usuarioController.listar);
routes.post("/usuarios", usuarioController.cadastrarPost);
routes.get("/usuarios/cadastrar/:_id?", usuarioController.cadastrarGet);
routes.get("/usuarios/remover/:_id", usuarioController.remover);
routes.get("/usuarios/login", usuarioController.loginGet);
routes.post("/usuarios/login", usuarioController.loginPost);
routes.get("/usuarios/:_id", usuarioController.detalhar);

module.exports = routes;
  