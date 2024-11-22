import express from "express";

const app = express();

app.listen(4000, () => {
    console.log("Servidor ativo");
})

//Retorna um arquivo JSON ao requisitar
app.get("/api", (req, res) => {
     res.json({
        name: "Nicholas Monteiro",
        age: "30",
        job: "Dev noob"
     });
});



app.get("/api/:key_word", (req, res) => {

} )