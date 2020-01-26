const express = require('express')
const config = require('./server/configure')


let app = express()
app = config(app);

app.set('port', process.env.PORT || 3300)

app.get('/', (req, res)=>{
    return res.status(200).json({'status': 200, message: 'API Loaded'})
})

app.listen(app.get('port'), ()=>{
    console.log(`Server running on localhost:${app.get('port')}`)
})