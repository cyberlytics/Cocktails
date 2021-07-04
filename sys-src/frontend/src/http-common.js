import axios from "axios";

export default axios.create({
    baseURL: "https://webteamblauapi.wildes-steinwerk.de/api/v1/cocktailsmixer",
    header: {
        "Content-type": "application/json"
    }
});