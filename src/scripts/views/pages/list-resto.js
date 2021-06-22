import RestoDbSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const ListResto = {
  async render() {
    return `
    <div class="container">
      <h2 tabindex="0" class="title__content">Daftar Restaurant</h2>
        <div id="restaurant" class="restaurant"></div>
    </div>
    `;
  },

  async afterRender() {
    const restos = await RestoDbSource.listResto();
    const restaurantContainer = document.querySelector('#restaurant');
    console.log('list restaurant', restos);
    restos.forEach((resto) => {
      console.log('list resto', resto);
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default ListResto;
