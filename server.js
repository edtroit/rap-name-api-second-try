const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage':{
        "Age": 29,
        "birthName": "Shéyaa Bin Abraham-Joseph",
        "birthLocation": "London, England"
    },
    'chance the rapper':{
        "Age": 29,
        "birthName": "Chancelor Bennett",
        "birthLocation": "Chicago, Illinois"
    },
    'unknown':{
        "Age":0,
        "birthName": "unknown",
        "birthLocation": "unknown"
    }   
}

app.get('/',(request, response) => {
    response.sendFile(__dirname + '/index.html')
})

// app.get('/api',(request, response)=>{
//     response.json(savage)
// })

app.get('/api/:name',(request, response)=>{
    const rapperName = request.params.name.toLocaleLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
        // response.json(rappers.indexOf(rapperName))
    }else{
        response.json(rappers['unknown'])
    }
    // response.json(rappers)
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})