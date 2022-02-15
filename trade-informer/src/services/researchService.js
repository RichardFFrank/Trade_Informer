import http from "../http-common";

class ResearchDataService {
    find(query) {
        return http.get(`/research/${query}`);
    }
}

export default new ResearchDataService();