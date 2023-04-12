const express = require('express');
const bodyparser = require('body-parser');

const app = express();

 app.set('view engine','ejs');

 app.use(bodyparser.urlencoded({ extended:true }));

 app.use(express.static("public"));
 
var options={
    weekday:'long',
    month: 'long',
    day: 'numeric'
}
var itemList = ["Buy Food","Cook Food","Eat Food"];
app.get('/', (req, res) => {
    
    var today= new Date();
    var day = today.toLocaleDateString('en-us',options);

    res.render('index', {
        kindofday: day,
        newItemList: itemList
    });
});


app.post('/', (req, res) => {
   var text=req.body.todo;
    itemList.push(text);
    res.redirect('/');
});

app.listen(3000,function () {
    console.log('Example app listening on port 3000!');
});