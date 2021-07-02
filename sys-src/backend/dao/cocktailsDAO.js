let cocktails

module.exports = class CocktailsDAO{
    //Creates a new DB Instance and fetch the Recipes-collection
    //Actually there is no need to load more then once, because we
    //can not create or delete a cocktail yet
    static async injectDB(client) {
        if(cocktails) 
        {
            return
        }

        try{
            cocktails = await client.db("EasyCocktail").collection("Recipes")
        }
        catch(e){
            console.error(`Fehler in der cocktailsDAO, ${e}`)
        }
    }


    //returns the List of all cocktails, that is actually in the DB
    static async getCocktails(){
        let courser
        try{
            courser = await cocktails.find()
        }
        catch(e){
            return { list : [] }
        }

        try{
            const cocktailsList = await courser.toArray() 
            return cocktailsList
        }
        catch(e){
            console.error(`Fehler in der cocktailsDAO beim Konvertieren aller Cocktails in ein Array, ${e}`)
        }
    }
}