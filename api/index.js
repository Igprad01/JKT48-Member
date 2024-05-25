const express = require('express');
const app = new express
const port = 3000
const path = require("path");
const fs = require('fs');


app.listen(port, () => {
    console.log(`running ${port}`);
});

app.get("/member",(req,res,next) => {
    const filepath = path.join(__dirname,'..', 'data', 'member.json');
    fs.readFile(filepath, 'utf8', (err, data) => {
       if (err) {
        next(err)
       } else {
        res.json(JSON.parse(data));
       }
    })
});



 