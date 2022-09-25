let projectData={};
const cors=require('cors');
const bodyParser=require('body-parser');

const express=require('express');
const { urlencoded } = require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static('website'));
const port=3030;
/*app.get('/',function(req,res){
    res.send('Hello World!');
});*/

app.listen(port,function(){
    console.log('https://localhost:'+port);
});

app.get('/tempData',function(req,res){
    res.send(projectData);
});

app.post('/setData',function(req,res){
    projectData=req.body;
    res.send();
})