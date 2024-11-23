import express from "express"
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) => {
    // Permite que o servidor interprete requisições com corpo no formato JSON
    app.use(express.json());
    // Rota para buscar todos os posts do banco de dados
    app.get("/posts", listarPosts);
    // Rota para criar um novo post
    app.post("/posts", postarNovoPost);
}


export default routes;
