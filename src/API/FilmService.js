import axios from "axios";

export default class FilmService {
    static async getAll(limit=10, page=1){
        const response = await axios.get("https://api.kinopoisk.dev/v1.4/movie", {
            params:{
                limit: limit,
                page: page 
            },
            headers: {    
                'X-API-KEY': process.env.REACT_APP_TOKEN
            }
        });
        return response.data;
    }

    static async getById(id){
        const response = await axios.get("https://api.kinopoisk.dev/v1.4/movie/" + id, {
            headers: {    
                'X-API-KEY': process.env.REACT_APP_TOKEN
            }
        });
        return response.data;
    }

    static async getReviewByFilmId(pageComments, id){
        const response = await axios.get("https://api.kinopoisk.dev/v1.4/review", {
            params:{
                limit: 1,
                page: pageComments,
                movieId: id
            },
            headers: {    
                'X-API-KEY': process.env.REACT_APP_TOKEN
            }
        });
        return response.data;
    }

}

