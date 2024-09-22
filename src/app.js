const express = require('express');
const app = express();



app.use('/',(req,res)=>{

    res.send('Hello From dev Tinder');

})


app.listen(1234,()=>{
    console.log('Server is running in port 1234');
})



