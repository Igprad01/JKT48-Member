import express from 'express';
import path from 'path';
import fs, { write } from 'fs';
const app = express();
const port = 3000

app.use(express.json());

app.listen(port, () => {
    console.log(`running ${port}`);
});

app.get('/', (res) => {
    res.send("ini adalah API");
})

app.get("/member",(req,res,next) => {
    const filepath = path.join(__dirname,'..', 'data', 'member.json');
    fs.readFile(filepath, 'utf8',(err, data) => {
       if (err) {
        next(err)
       } else {
        res.json(JSON.parse(data));
       }
    })
});

app.post("/post", (req,res,next) => {
    const filepath = path.join(__dirname, '..', 'data', 'member.json');
    const NewMember = req.body;

    fs.readFile(filepath, 'utf8',(err, data) => {
        // dilanjut nanti
    })
})
