import http from "../http-common.js";

class CocktailsDataService{
    getAll(){
        let test = http.get(`/cocktails`);
        return test;
    }
}

export default new CocktailsDataService();