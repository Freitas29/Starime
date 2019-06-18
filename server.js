const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
//Inicando app
const app = express();
app.use(express.json());
app.use(cors());
//Iniciando o banco
mongoose.connect("mongodb://localhost:27017/nodeapi",{ useNewUrlParser:true });

require('./models/Anime');

//Rotas
app.use("/api",require('./routes'));
app.listen(3001);