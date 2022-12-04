import axios from "axios";

// used to simplify the calls to teammates wikipedia scraper service.

export default axios.create({
    baseURL: "https://cs361-wikiscraper.herokuapp.com/wiki-service",
    headers: {
        "Content-type": "application/json"    }
});