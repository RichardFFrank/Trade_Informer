import SearchBar from "../components/search_bar";
import http from "../http-newsservice"


class ResearchDataService {
    getCompanyInfo(query) {
        // let payload = `{search:"${query}"}`
        let payload = {
            search: query
        }

        return http.post("https://cs361-wikiscraper.herokuapp.com/wiki-service",payload)
    }
}

export default new ResearchDataService();