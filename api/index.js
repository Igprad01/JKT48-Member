import express from 'express';
import path from 'path';
import fs, { write } from 'fs';
const app = express();
const port = 3000
let json;

app.use(express.json());

app.listen(port, () => {
    console.log(`running ${port}`);
});


app.get("/member",(req,res,next) => {
    const filepath = path.join(__dirname,'..', 'data', 'member.json');
    fs.readFile(filepath, 'utf-8',(err, data) => {
       if (err) {
        next(err)
       } else {
        res.json(JSON.parse(data));
       }
    })
});

app.post("/post", (req,res,next) => {
    const filepath = path.join(__dirname, '..', 'data', 'member.json');
    const newMember = req.body;

    fs.readFile(filepath, 'utf8',(err, data) => {
        if (err) {
            return next(err)
        }
        try {
            json = JSON.parse(data);
        } catch (parseErr) {
            return next(parseErr);
        }
        
        json.push(newMember);

        fs.writeFile(filepath, JSON.stringify(json, null, 2), 'utf8', (writeErr) => {
            if (writeErr) {
                return next(writeErr)
            } 
            res.status(201).json(newMember);
        })
    })

    console.log("data tersebut sudah dikirim");
});

