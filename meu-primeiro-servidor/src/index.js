const express = require('express')

const app = express()

const mesagemCubos = "Olá Shylton, bem vindo ao mundo do back end: Equipe Cubos Academy"


app.get('/', function (req, res) {
    res.send(mesagemCubos)
});



app.listen(100);