const express = require('express')
const app = express()
const port = process.env.port || 5000;
app.get('/',(req,res)=>{
    res.send('hey there server is running')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })