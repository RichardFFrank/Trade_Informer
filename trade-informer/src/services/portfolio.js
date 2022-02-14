import http from "../http-common";

class PortfolioDataService {
    getAll() {
        return http.get(`/portfolio/`);
    }

    find(query) {
        return http.get(`/portfolio/user/${query}`);
    }

    addInvestment(data) {
        return http.post("/portfolio/add", data);
    }

    updateInvestment(data) {
        return http.put("/portfolio/update/", data);
    }

    deleteInvestment(id) {
        return http.delete(`/portfolio/${id}`);
    }
}

export default new PortfolioDataService();