import FavoriteRestaurant from '../../data/favorite-restaurant';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h1 id="content-heading">Restoran Favoritmu</h1>
        <div id="empty_favorite" class="empty_favorite"></div>
        <div class="restaurant-posts" id="restaurant-posts">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const listRestaurant = await FavoriteRestaurant.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-posts');
    const emptyrestaurant = document.querySelector('#empty_favorite');

    if (listRestaurant.length === 0) {
      emptyrestaurant.innerHTML = `
        You don't have any Favorite Restaurant
      `;
    }

    listRestaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Favorite;
