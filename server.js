const express = require('express')
const path = require('path')
const apiRoutes = require('./routes/apiRoutes/index.js')
const htmlRoutes = require('./routes/htmlRoutes/index.js')
const PORT = process.env.PORT || 3001

const app = express()

//Middlewear for parsing JSON and urlencoded form data
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)



app.listen(PORT, () =>
  console.log(`App listening at http://localhost/:${PORT} 🚀`)
);