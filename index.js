

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/hello',(req, res)=> {
// res.send({"name":"HItesh","age":36})
// } )

// // Get one User with Id
// app.get('/user', (req, res) => {
//   res.send('Got a POST request')
// })

// Get All Users
// app.post('/users"', (req, res) => {
//   res.send('Got a POST request')
// })


//Make a User
// app.post('/user"', (req, res) => {
  // get the data from front end , print it in console
  // and send message back to front end that data is saved
//   res.send('Got a POST request')
// })

//Update a user
// app.put('/user', (req, res) => {
//   res.send('Got a POST request')
// })

// Delete a user
// app.delete('/user', (req, res) => {
//   res.send('Got a POST request')
// })


//



const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const conn = require('./db')
const userRouter = require('./routes/user-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

conn.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use('/api', userRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
