import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
          <div class="content">
              <h2 class="content__heading">Resto Favorite</h2>
              <div id="restaurant" class="restaurant"></div>
          </div>`;
  },
  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllRestos();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
