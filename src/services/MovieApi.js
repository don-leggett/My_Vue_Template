import axios from "axios";

export default {
  async fetchMovieCollection(name) {
    return axios.get("&s=" + name).then(response => {
      return response.data;
    });
  },

  async fetchSingleMovie(id) {
    return axios.get("&i=" + id).then(response => {
      return response.data;
    });
  }
};
