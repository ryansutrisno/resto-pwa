import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
    <h2 class="resto__title">${resto.name}</h2>
        <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}" alt="${resto.name}" />
            <div class="resto__info">
                <h3>Information Resto</h3>
                    <h4>Alamat Lengkap:</h4>
                        <p>${resto.address}</p>
                    <h4>Kategori menu:</h4>
                        <p>${resto.categories[0].name}</p>
                    <h4>Menu makanan:</h4>
                        <p>${resto.menus.foods[0].name}</p>
                    <h4>Menu minuman:</h4>
                        <p>${resto.menus.drinks[0].name}</p>
                    <h4>Rating</h4>
                        <p>${resto.rating}</p>
            </div>
        <div class="resto__overview">
            <h3>Customer Review</h3>
                <p>${resto.customerReviews.name}</p>
                <p>${resto.customerReviews.review}</p>
                <p>${resto.customerReviews.date}</p>
        </div>
`;

const createRestoItemTemplate = (resto) => `
    <article class="card">
        <img class="tumbnail" src="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}" alt="${resto.name}">
        <div class="post-item-content">
            <h3 class="post-item-title">${resto.name}</h3>
            <span class="post-item-city">Lokasi: ${resto.city}</span>
            <div class="rating-wrapper">
                <h2 class="rating">Rating: </h2><span>${resto.rating}</span>
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
