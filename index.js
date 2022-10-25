const express = require('express')
const cors = require ('cors')
const app = express()
const port = process.env.port || 5000;
const courses = require('./data/Courses.json')
app.get('/', (req, res) => {
    res.send('hey there server is running')
})
app.use(cors())
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})