const express = require('express');
const cors = require ('cors');
const app = express();
const port = process.env.port || 5000;
const courses = require('./data/Courses.json');
const details = require ('./data/Details.json');
app.get('/', (req, res) => {
    res.send('hey there server is running')
})
app.use(cors())
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id',(req,res) =>{
    const id = req.params.id;
    const item = details.find(x => (x.id === id))
    res.send(item)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})