import conectarAoBanco from "../config/dbConfig.js"

// Conecta ao banco de dados utilizando a string de conexão fornecida
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// Função assincrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
    // Seleciona o banco de dados "imersao_alura"
    const db = conexao.db("imersao_alura")
    // Seleciona a coleção "posts" dentro do banco de dados 
    const colecao = db.collection("posts")
    // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
};
  
export async function criarPost(novoPost) {
    const db = conexao.db("imersao_alura")
    const colecao = db.collection("posts")
    return colecao.insertOne(novoPost);
}