const express = require("express")
const app = express()
const PORT = 8080
const devicesV1Route = require('./src/routes/v1/devices')

app.use(express.json())

// use the suitable router, with versioning
app.use('/v1/devices', devicesV1Route)

app.listen(PORT, () => {
    console.log(`Server up and running on port: ${PORT}`)
})
