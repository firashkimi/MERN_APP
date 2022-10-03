const express = require ('express')
const dotenv = require ('dotenv').config()
const port = process.env.PORT || 3000
const app = express()

//First Route 
app.get('/api/goals',(res,req)=>{
    res.send('Get Goals')
})

app.listen(port, () => console.log (`Server started on port ${port}`))