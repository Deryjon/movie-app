import axios from "axios";

const http = axios.create()

http.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query='

export default http