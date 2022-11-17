const express = require('express')
const app = express();
const cors = require('cors')
const PORT = 8000;

app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Real name asdnlkasjdna',
        'birthlocation': 'London, England'
    },
    'chance the rapper':{
        'age': 10,
        'birthName': 'Real name chance',
        'birthlocation': 'Chicago, England'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthlocation': 'unknown'
    }
}


app.get('/', (request, response)=>{ // it is a network request
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase();
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT , ()=>{
    console.log(`the server is now running in port ${PORT}! Betta Go Catch it!`)
})