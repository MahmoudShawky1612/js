const express = require("express");

const app = express();

app.use(express.json())

app.get("/jss", (req,res)=> {
    res.json({
        name:req.body.name
    })
});

app.put("/teest", (req,res)=> {
    res.send("Hello put");
});


app.delete("/teeest", (req,res)=> {
    res.send("Hello delete");
});

app.get("/summation/:num1/:num2", (req,res)=> {
    const number1 = req.params.num1;
    const number2 =req.params.num2;

    const sum = Number(number1) + Number(number2);
    res.send('summation is '+ sum);
});

app.listen(8000, ()=>{
    console.log("Server is running on port 3000");
}) ;