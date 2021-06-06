import express from "express"
import corse from "cors"
import cocktails from "./api/cocktails.route.js"

const app = express()

app.use(corse())
app.use(express.json())

app.use("/api/v1/cocktailsmixer", cocktails)
app.use("*", (req, res) => {res.status(400).json({error: "not found"})})

export default app