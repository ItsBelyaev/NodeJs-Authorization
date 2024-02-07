require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const PORT = process.env.PORT

const authRouter = require("./authRouter")
const app = express()

app.use(express.json())

app.use("/auth", authRouter)

const start = async() => {
    try {
        await mongoose.connect('mongodb+srv://daniilbelyaeva:gagaY123@cluster0.m6f5gb6.mongodb.net/node-auth?retryWrites=true&w=majority')
        app.listen(PORT, () => {
            console.log("Server was started")
        })
    } catch (e) {
        console.log(e)
    }
}

start()