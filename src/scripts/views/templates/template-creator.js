import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="post-item">
    <img class="post-thumbnail lazyload" src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}" alt="Restaurant ${restaurant.name}">
    <div class="post-content">
      <h2 class="post-title"><a href="#">${restaurant.name}</a></h2>
      <h2 class="post-address">Alamat: ${restaurant.address}</h2>
      <h2 class="post-city">Kota: ${restaurant.city}</h2>
      <h2 class="post-rating">Penilaian: ${restaurant.rating}⭐️</h2>
      <p class="post-description">${restaurant.description}</p>
    </div>

    <div class="menu-container">
      <div class="menu-section">
        <h2 tabindex="0">Menu Makanan</h2>
        <ul tabindex="0">${restaurant.menus.foods.map((food, i) => `
          <li><p>${i + 1} ${food.name}</p></li>
        `).join('')}
        </ul>
      </div>
      <div class="menu-section">
        <h2 tabindex="0">Menu Minuman</h2>
        <ul tabindex="0">${restaurant.menus.drinks.map((drink, i) => `
            <li><p>${i + 1} ${drink.name}</p></li>
        `).join('')}
        </ul>
      </div>
    </div>

    <div class="detail-reviews">
      <h2 tabindex="0">Customer Reviews</h2>
      <ul>${restaurant.customerReviews.map((review) => `
        <li tabindex="0">
          <div>
            <span class="avatar">${review.name[0]}</span>
          </div>
          <div>
            <h3>${review.name}</h3>
            <p>${review.review}</p>
            <time>${review.date}</time>
          </div>
          </li>
          <hr>
      `).join('')}
      </ul>
    </div>
  </article>
`;

const createRestaurantListTemplate = (restaurant) => `
    <article class="post-item" id="post-item">
      <a href="/#/detail/${restaurant.id}">
        <img class="post-thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}" alt="Restaurant ${restaurant.name} Thumbnail">
        <div class="post-content">
            <h2 class="post-title">${restaurant.name}</h2>
            <p class="post-rating">Penilaian: ${restaurant.rating}/5 ⭐️</p>
            <p class="post-description">${restaurant.description.slice(0, 100)}</p>
        </div>
      </a>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantListTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
