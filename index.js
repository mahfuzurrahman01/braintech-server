const express = require('express');
const cors = require ('cors');
const app = express();
const port = process.env.port || 5000;
const courses = require('./data/Courses.json');
const details = require ('./data/Details.json');
const pricing = require('./data/pricing.json')
app.get('/', (req, res) => {
    res.send('hey there server is running')
})
app.use(cors())
//get the courses topic 
app.get('/courses', (req, res) => {
    res.send(courses)
})
//get a single course details
app.get('/courses/:id',(req,res) =>{
    const id = req.params.id;
    const item = details.find(x => (x.id === id))
    res.send(item)
})
//get a single course price
app.get('/checkout/:id',(req,res) =>{
    const id = req.params.id;
    const item = pricing.find(y => (y.id === id))
    res.send(item)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})