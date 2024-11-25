import conectarAoBanco from "../config/dbConfig.js";
import { ObjectId } from 'mongodb';

// **Conecta ao banco de dados:** Estabelece uma conexão com o banco de dados MongoDB utilizando a string de conexão obtida da variável de ambiente STRING_CONEXAO.
// A função conectarAoBanco, definida em outro arquivo, provavelmente contém a lógica para estabelecer a conexão com o banco.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// **Função assíncrona para buscar todos os posts:** 
// Busca todos os posts armazenados na coleção "posts" do banco de dados "imersao_alura".
export async function getTodosPosts() {
  // **Seleciona o banco de dados:** Escolhe o banco de dados específico onde os posts estão armazenados.
  const db = conexao.db("imersao_alura");
  // **Seleciona a coleção:** Escolhe a coleção dentro do banco de dados que contém os documentos (posts).
  const colecao = db.collection("posts");
  // **Retorna todos os posts:** Realiza uma busca por todos os documentos na coleção e retorna os resultados em forma de um array.
  return colecao.find().toArray();
};

// **Função assíncrona para criar um novo post:**
// Insere um novo post na coleção "posts" do banco de dados "imersao_alura".
export async function criarPost(novoPost) {
  // **Seleciona o banco de dados e a coleção:** Similar à função anterior.
  const db = conexao.db("imersao_alura");
  const colecao = db.collection("posts");
  // **Insere um novo documento:** Insere o objeto `novoPost` na coleção, gerando um novo documento com um ID único.
  return colecao.insertOne(novoPost);
}

// **Função assíncrona para atualizar um post:**
// Atualiza um post existente na coleção "posts" do banco de dados "imersao_alura".
export async function atualizarPost(id, novoPost) {
  // **Seleciona o banco de dados e a coleção:** Similar às funções anteriores.
  const db = conexao.db("imersao_alura");
  const colecao = db.collection("posts");
  // **Cria um objeto ObjectId:** Converte o ID fornecido em um objeto ObjectId, que é o tipo de ID utilizado pelo MongoDB.
  const objID = ObjectId.createFromHexString(id);
  // **Atualiza o documento:** Atualiza o documento com o ID correspondente ao objID, substituindo os valores pelos do objeto novoPost.
  return colecao.updateOne({_id: objID}, {$set:novoPost});
}