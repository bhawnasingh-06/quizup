const connectToMongo = require('./db');
connectToMongo();
var cors = require('cors')
const express = require('express')
const app = express()
const port = 5000
//var app = express()

app.use(cors())
app.use(express.json())
//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/questions',require('./routes/questions'))

app.get('/', (req,res) =>{
    res.send("Hello world");
})

app.listen(port, () => {
  console.log(`QuizUp app listening on port http://localhost:${port}`)
})