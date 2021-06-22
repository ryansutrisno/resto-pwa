import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => {
  const { categories, menus, customerReviews } = resto;
  const { foods, drinks } = menus;
  console.log('resto detail', categories);
  return `
  <h2 class"resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" alt="${resto.name}" />
    <div class="resto__info">
        <h3 class="resto__title">Information Resto</h3>
         <table>
            <tr>
                <h4>Alamat Lengkap:</h4>
                <p>${resto.address}</p>
            </tr>
            <tr>
                <h4>Rating:</h4>
                <p>${resto.rating}</p>
            </tr>
            <tr>
                <h4>Kategori:</h4>
                    <ul>
                        ${categories.map((categori) => `<li>${categori.name}</li>`).join('')}
                    </ul>
            </tr>
            <tr>
                <h4>Makanan:</h4>
                    <ul>
                        ${foods.map((food) => `<li>${food.name}</li>`).join('')}
                    </ul>
            </tr>
            <tr>
                <h4>Minuman:</h4>
                    <ul>
                        ${drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                    </ul>
            </tr>
         </table>
    </div>
    <h3>Customer Review</h3>
    <div class="review">
    ${customerReviews.map((customerReview) => `
            <div class="review__container">
                    <p> - <span>${customerReview.name}</span></p>
                    <span>" ${customerReview.review} "</span><br>
                    <small>${customerReview.date}</small>
            </div>`).join('')}
    </div>
    `;
};

const createRestoItemTemplate = (resto) => `
    <article class="card">
        <img class="tumbnail" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" alt="${resto.name}">
        <div class="post-item-content">
            <h3 class="post-item-title"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
            <span class="post-item-city">Lokasi: ${resto.city}</span>
            <div class="rating-wrapper">
                <h2 class="rating">Rating: </h2><p>⭐️<span>${resto.rating}</span></p>
            </div>
            <p class="post-item-description">${resto.description}</p>
        </div>
    </article>
`;

const createFavoriteButtonTemplate = () => `
    <button aria-label="favorite this resto" id="likedButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
