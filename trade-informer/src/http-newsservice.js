import axios from "axios";

export default axios.create({
    baseURL: "https://cs361-wikiscraper.herokuapp.com/wiki-service",
    headers: {
        "Content-type": "application/json"    }
});