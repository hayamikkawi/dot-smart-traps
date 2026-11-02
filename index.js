const express = require("express")
const app = express()
const PORT = 8080

app.listen(PORT, () => {
    console.log()
    console.log(`Server up and running on port: ${PORT}`)
})
