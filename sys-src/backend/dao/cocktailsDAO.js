let cocktails

export default class CocktailsDAO{
    //Injekten der Datenbank und laden der Datan
    static async injectDB(conn) {
        if(cocktails) 
        {
            return
        }

        try{
            cocktails = await conn.db(process.env.COCKTAILS_DB_NS).collection("Recipes")
        }
        catch(e){
            console.error(`Fehler in der cocktailsDAO, ${e}`)
        }
    }

    //Holt die Liste der aktuellen Datenbank
    //Wird später noch ausgebaut, um darin suchen zu können
    static async getCocktails(){
        let courser
        try{
            courser = await cocktails.find()
        }
        catch(e){
            return { list : [] }
        }

        try{
            console.debug(typeof(courser))
            const cocktailsList = await courser.toArray() 

            return cocktailsList
        }
        catch(e){
            console.error(`Fehler in der cocktailsDAO beim Konvertieren aller Cocktails in ein Array, ${e}`)
        }
    }
}