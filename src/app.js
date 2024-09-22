const express = require('express');
const app = express();



// app.use('/',(req,res)=>{

//     res.send('Hello From dev Tinder');

// })


app.get('/',(req,res)=>{
   res.send("Hello from dev Tinder");
    // res.json("hello from get")
})

//get the data from query params
app.get('/hello',function(req,res){
   console.log(req.query);
    res.send('Msg from hello...')
})

//etting the id from url
app.get('/test/:id',function(req,res){
    console.log(req.params.id);
     res.send('Msg from hello...')
 })

// app.get('/hello/:id',function(req,res){
//     res.send('Msg from hello...')
// })


app.listen(1234,()=>{
    console.log('Server is running in port 1234');
})



