import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const data = await response.json();
    return data.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const data = await response.json();
    return data.restaurant;
  }
}

export default RestaurantSource;
