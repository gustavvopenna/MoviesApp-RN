import axios from "axios";

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '5f53dc92546171159447e0e8028719e5',
    page: 1
  }
})

export default movieDB;