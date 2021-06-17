import RestoDbSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

// const ListResto = {
//   async render() {
//     return `
//         <div class="content">
//             <h2 class="content__heading">Daftar Resto</h2>
//             <div id="restaurant" class="restaurant"></div>
//         </div>
//         `;
//   },
const ListResto = {
  async render() {
    return `
    <div class="container">
      <h2 tabindex="0" class="title__content">Daftar Restaurant</h2>
        <div id="restaurant" class="post"></div>
    </div>`;
  },

  async afterRender() {
    const restos = await RestoDbSource.listResto();
    const restaurantContainer = document.querySelector('#restaurant');
    console.log('restos', restos);
    restos.forEach((resto) => {
      console.log('resto', resto);
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default ListResto;
