const express = require('express');  //add express
const bodyparser = require('body-parser'); //add body-parser
const date=require(__dirname+'/date');//add date module which is declared in date.js

const app = express(); 

 app.set('view engine','ejs');// used view engine for ejs rendering

 app.use(bodyparser.urlencoded({ extended:true })); 

 app.use(express.static("public")); // serve static files 

 //declare two lists for items and work globaly
const itemList = ["Buy Food","Cook Food","Eat Food"]; 
const workList=["Hello World"];

app.get('/', (req, res) => {

    const day= date.getDate(); //  get date function from date.js

    // render response to index.html using esj
    res.render('index', {
        listTitle: day,                 // title
        newItemList: itemList           // list items
    });
});

//post reqest to home route
app.post('/', (req, res) => {
    
   var text=req.body.todo;                      // get value from input by its name

   if(req.body.list==="Work" && text!=""){
        workList.push(text);
        res.redirect('/work');                  // redirect to work route
   }
   else{
        if(text!=""){
            itemList.push(text);
            res.redirect('/');                  // redirect to home route
        }
   }
});

app.get('/work', (req, res) => {
    res.render('index', {
        listTitle: "Work To-Do List",           //title
        newItemList: workList                   //work list
    });
});

// app.post('/work', (req, res) => {

// });

//app listening on 3000 port
app.listen(3000,function () {
    console.log('Example app listening on port 3000!');
});