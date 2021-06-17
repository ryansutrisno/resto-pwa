import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/resto-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div id="favoriteButtonContainer"></div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        address: resto.address,
        categories: resto.categories[0].name,
        menuDrink: resto.menus.foods[0].name,
        menuFood: resto.menus.drink[0].name,
        rating: resto.rating,
        customerName: resto.customerReviews.name,
        customerReview: resto.customerReviews.review,
        date: resto.customerReviews.date,
      },
    });
  },
};

export default Detail;
