const app = require("./server.js")
const mongodb = require("mongodb")
const dotenv = require("dotenv")
const CocktailsDAO = require("./dao/cocktailsDAO.js")

dotenv.config()

const MongoClient = mongodb.MongoClient

//Create a connection to the MongoDB.
MongoClient.connect( 
    "mongodb+srv://Michael_MongoDB:bYGrn4drdZOMoH6h@teamblaucluster.sttqh.mongodb.net/EasyCocktail?retryWrites=true&w=majority",
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
    //Inject the DB
    await CocktailsDAO.injectDB(client)
    app.listen(process.env.PORT, () => {
        console.log(`listening on port 5000`)
    })
})