import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.
*/

class SnackOrBoozeApi {

  static async getItems(category) {
    const result = await axios.get(`${BASE_API_URL}/${category}`);

    return result.data;
  }

  static async setItem(category, item) {
    
    await axios.post(`${BASE_API_URL}/${category}`, item);

  }

}

export default SnackOrBoozeApi;
