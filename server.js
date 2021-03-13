import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cors())

let rundata = {}

app.get('/', (req,res) => {
    
    res.send('Getting root')
})

app.get('/profile', (req,res) => {
    res.send(rundata)
})

app.post('/profile', (req,res) => {
    console.log(req.body);
    rundata = req.body;
    
    res.send(req.body)
})

app.listen(3500);