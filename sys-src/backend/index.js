import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import CocktailsDAO from "./dao/cocktailsDAO.js"

dotenv.config()

const MongoClient = mongodb.MongoClient

MongoClient.connect( 
    process.env.MONGODB_URI,
    {
        poolSize:5,
        wtimeout:2500,
        useUnifiedTopology: true
    }
)
.catch(err => {
    console.error(err)
    process.exit(1)
})
.then(async client => {
    await CocktailsDAO.injectDB(client)
    app.listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`)
    })
})