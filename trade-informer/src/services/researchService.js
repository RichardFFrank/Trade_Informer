import httpNews from "../http-newsservice";
import http from "../http-common";
import httpSearch from "../http-search";

class ResearchDataService {

    // query to get company info from teammates microservice
    getCompanyInfo(query) {
        let payload = {
            search: query
        }

        return httpNews.post("https://cs361-wikiscraper.herokuapp.com/wiki-service",payload)
    }

    getStockPriceData(query) {
        let stock = query
        stock.toUpperCase()
        return http.get(`/research/${stock}`)
    }

    getStockNames(query) {
        return httpSearch.get(`/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=e84828977e45d895cffc043e52346554`)
    }
}

export default new ResearchDataService();