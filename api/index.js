import express from 'express';
import path from 'path';
import fs from 'fs';
const app = express();
const port = 3000


app.listen(port, () => {
    console.log(`running ${port}`);
});

app.get('/', (res) => {
    res.send("ini adalah API");
})

app.get("/member",(req,res,next) => {
    const filepath = path.join(__dirname,'..', 'data', 'member.json');
    fs.readFile(filepath, (err, data) => {
       if (err) {
        next(err)
       } else {
        res.json(JSON.parse(data));
       }
    })
});

app.post("/post", (req,res,next) => {
    // nanti dibuatkan 
})


// nanti dibuatkan error handling 