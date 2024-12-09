const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://karen:k2a0r0e5n@cluster0.ilanc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const session = require("express-session");
app.use(session({
    secret:"ifpe",
    saveUninitialized:false,
    resave:false
}));
app.set('view engine', 'ejs');

const alunoRoutes = require("./routes/alunoRoutes");
app.use(alunoRoutes);

const usuarioRoutes = require("./routes/usuarioRoutes");
app.use(usuarioRoutes);

//09/12/2024



app.get("/", function(req, res){
    if(req.session.usuario){
        res.render("index");
    }else{
        res.redirect("/usuarios/login");
    }
    });



app.listen("999", function(){
    console.log("Rodando...");

   

});