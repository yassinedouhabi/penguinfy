import axios from "axios";

const API_KEY = "fef2ac7c1769d429ea4ad1f57473cf4f";
const BASE_URL = "https://api.themoviedb.org/3";

const movieService = {
  getGenres: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data.genres;
    } catch (error) {
      console.error("Error fetching genres:", error);
      throw error;
    }
  },

  getPopularMovies: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      throw error;
    }
  },

  getRecommendedMovies: async (movieId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}/recommendations`,
        {
          params: {
            api_key: API_KEY,
          },
        },
      );
      return response.data.results;
    } catch (error) {
      console.error("Error fetching recommended movies:", error);
      throw error;
    }
  },
};

export default movieService;
