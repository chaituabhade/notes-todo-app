const express = require('express');
const app = express();



app.use(express.json());
app.use.apply(express.urlencoded({extended: true}));


app.use(function(req,res,next){
    console.log('cala');
    next();
});

app.get("/",function(req,res){
    res.send("hello world");
});


app.listen(3000);
