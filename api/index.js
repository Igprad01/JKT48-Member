const express = require("express");
const app = new express
const port = 3000

app.listen(port, () => {
    console.log("server running at port 3000");
});

app.get("/member",(req,res,next) => {
    // ngambil path disini
});

// nanti dipelajari mengenai API lebih mendalam + terkait post data 
 