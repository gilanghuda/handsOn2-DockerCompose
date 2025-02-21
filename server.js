const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT || 3000
const connectDB = require("./db/connect")
const {createTable, getUser} = require("./db/sqlFunctions")

app.use(express.json())
connectDB()

app.get("/", (req, res) => {
    res.send("Server is Running!")
})

app.get("/users", async (req, res) => {
    createTable()
    getUser()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
