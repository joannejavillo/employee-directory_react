import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User API

export default {
  getRandomUser: function() {
    return axios.get("https://randomuser.me/api/?results=100)");
  },
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://randomuser.me/)" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
};
