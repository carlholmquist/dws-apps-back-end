import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cors())

let rundata = {}

//Create a runform
app.post('/run', async(req,res) => {
    try {
        const labeltype = 'Hazy Ipa'
        // const {  operatorId, runTimeData, machineBPM, cansProduced, errormessage } = req.body;
        // const {runTime, firstStart, end} = runTimeData;
        const newRun = await pool.query(
            "INSERT INTO orders (label_type) VALUES($1)", 
            [labeltype]
            )
        
        console.log(newRun)
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/run', async(req,res) => {
    try {
        const orders = await pool.query(
            "SELECT * FROM orders"
        )
        const operators = await pool.query(
            "SELECT * FROM operators"
        )
        console.log(orders.rows);
        const result = {
            operators: operators.rows,
            orders: orders.rows
        }
        res.send(result);
        
    } catch (error) {
        
    }
})

app.get('/', (req,res) => {
    
    res.send('Getting root')
})

app.get('/profile', (req,res) => {
    res.send(rundata)
})

app.post('/profile', (req,res) => {
    
})

app.listen(3500);