//Importe 
const express = require('express');
const path = require('path');

const fs = require('fs');

const app = express();
const port = 3300;

const fileUsers = path.join(__dirname, './json/users.json');
const fileDocuments = path.join(__dirname, './json/documents.json');

app.use(express.json());


app.get('/users',(req,res) => {
    fs.readFile(fileUsers,'utf-8',(err,data) => {
        if(err){
            res.status(500).send('Erro ao ler o arquivo de usuários');
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
});

app.get('/docs',(req,res) => {
    fs.readFile(fileDocuments,'utf-8',(err,data) => {
        if(err){
            res.status(500).send('Erro ao ler o arquivo de usuários');
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
});


app.use((req,res)=>{
    res.status(404).send('404 page not found');
});

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
});

