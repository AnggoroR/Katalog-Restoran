import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h1 id="content-heading">Daftar Restoran</h1>
        <div class="restaurant-posts" id="restaurant-posts">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const listRestaurant = await RestaurantSource.getRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-posts');

    listRestaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Home;
