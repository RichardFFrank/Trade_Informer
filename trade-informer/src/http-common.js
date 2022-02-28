import axios from "axios";

// http common used to simplify requests.

export default axios.create({
    baseURL: "http://localhost:3002/",
    headers: {
        "Content-type": "application/json"      // @TODO - How to set the headers for auth.
    }
});
