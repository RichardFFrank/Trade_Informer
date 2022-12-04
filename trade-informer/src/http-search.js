import axios from "axios";

// used to simplify the calls to  the financial modeling prep api.

export default axios.create({
    baseURL: "https://financialmodelingprep.com",
    headers: {
        "Content-type": "application/json"    }
});