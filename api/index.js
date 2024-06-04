import express from 'express';
import path from 'path';
import fs, { stat } from 'fs';
const app = express();
const port = 3000
let json;

app.use(express.json());

app.listen(port, () => {
    console.log(`running ${port}`);
});

app.get("/", (req,res,next)=> {
    res.send('hello world');
});
// nanti diperbarui menampilkan readme.md


app.get("/member", (req, res, next) => {
    const filepath = path.resolve('assets', 'data', 'member.json');
    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            next(err);
        } else {
            try {
                const members = JSON.parse(data);
                const filters = req.query;
                const filteredMembers = members.filter(member => {
                    return Object.keys(filters).every(key => {
                        return String(member[key]).toLowerCase() === String(filters[key]).toLowerCase();
                    });
                });

                res.json(filteredMembers);
            } catch (parseErr) {
                next(parseErr);
            }
        }
    });
});



app.post("/post", (req,res,next) => {
    const filepath = path.resolve('assets', 'data' , 'member.json');
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
            } else {
            res.status(201).json(newMember);
            console.log("data tersebut sudah dikirim");
            }
        })
    })
});



app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).json({
        status : err,
        message : err.message
    });
});

