const { resolve } = require("path");

const express = require('express')
const app = express()
const port = 8080

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World from Vandit!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})