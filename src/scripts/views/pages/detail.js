import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/resto-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="container">
      <h2 tabindex="0" class="title__content">Detail Restaurant</h2>
          <div id="resto" class="resto"></div>
        <div id="favoriteButtonContainer"></div>
    </div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailResto(url.id);
    console.log('resto detail', resto);
    const restaurantContainer = document.querySelector('#resto');
    restaurantContainer.innerHTML = createRestoDetailTemplate(resto);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
