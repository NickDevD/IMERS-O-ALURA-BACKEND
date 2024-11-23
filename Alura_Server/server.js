import express from "express";
import routes from "./src/routes/postsRoutes.js";



const app = express();
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagemno console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});



/* 
//Array armazenado em memória para armazenar dados
const posts = [
  {
    "name": "Nicholas"
  }
]
*/


/*Executa o servidor com retorno de uma mensagem de Boas Vindas
app.get("/api", (req, res) => {
    res.status(200) .send("Boas vindas ao meu primeiro projeto back-end!"); 
});
*/

/*
//Linha criada para chamar todos os dados dentro de um array
app.get("/posts", (req, res) => {
    res.status(200) .json(posts);
});


//Função criada para buscar id's
function buscarPostPorID(id) {
  return posts.findIndex((post) => {
      return post.id === Number(id);
  }); 
};

//rota criada para requisitar objetos por id
app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id)
  res.status(200) .json(posts[index]);
});
*/