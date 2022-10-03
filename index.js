const express = require ('express')
const dotenv = require ('dotenv').config()
const port = process.env.PORT || 3000
const app = express()

//First Route 
app.get('/api/goals',(req,res)=>{
    res.status(200).send('Get Goals')
    res.status(200).json({message:'Get Goals'})
})


app.listen(port, () => console.log (`Server started on port ${port}`))