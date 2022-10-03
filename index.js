const express = require ('express')
const dotenv = require ('dotenv').config()
const port = process.env.PORT || 3000
const app = express()

//First Route 
app.get('/api/goals',(res,req)=>{
    //function accepts a single parameter body that describe the body which is to be sent in the response
    //It returns an Object
    // res.status(200).send('Get Goals')

    // function sends a JSON response. This method sends a response (with the correct content-type)
    //that is the parameter converted to a JSON string using the JSON.stringify()method.
    res.status(200).json({message:'Get Goals'})

})


app.listen(port, () => console.log (`Server started on port ${port}`))