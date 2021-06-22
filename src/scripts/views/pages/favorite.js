import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="container">
        <h2 tabindex="0" class="title__content">Resto Favorit</h2>
        <div id="restaurant" class="restaurant"></div>
    </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restaurantContainer = document.querySelector('#restaurant');
    console.log('restaurant favorite', restos);
    restos.forEach((resto) => {
      console.log('resto favorite', resto);
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
