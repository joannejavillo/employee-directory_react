import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User API

export default {
  getEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=20");
  },

//getEmployee: function() {
  //return axios.get("https://randomuser.me/api)" + + "/images");
   //},


//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
};
