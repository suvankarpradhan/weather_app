const hbs = require('hbs');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000; //enviorenmental variable

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../template/views");
const partialPath = path.join(__dirname,"../template/partials");

app.set('view engine','hbs');
app.set('views',templatePath);

hbs.registerPartials(partialPath);

app.use(express.static(staticPath));


app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("/*",(req,res)=>{
    res.render("error",{
        error_message:"Opps page not found"
    });
});
app.listen(port,()=>{
    console.log(`port is listening at ${port}`);
})