import Database from '../database/database.js';

class Router {
    constructor(app) {
        db = new Database(process.env.MONGODB_URI, process.env.COCKTAILS_DB_NS);

        app.use("/api/v1/cocktailsmixer/cocktails", cocktails);
        app.use("/api/login", login);
    }
}