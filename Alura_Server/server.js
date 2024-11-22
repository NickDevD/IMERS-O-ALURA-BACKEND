import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200) .send("Boas vindas ao meu primeiro projeto back-end!"); 
});

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
