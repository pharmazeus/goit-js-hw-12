export const createGalleryCardTemplate = images => {
  return images
    .map(
      imgInfo => `<li class="gallery-item">
        <a class = 'large-img' href="${imgInfo.largeImageURL}">
          <img src="${imgInfo.webformatURL}" alt="${filterDublicateValues(
        imgInfo.tags
      )}" loading="lazy" />
        </a>
        <div class="post-stats">
         <div class="stats-unit">
          <p class="stat-header">Likes</p>
          <p class ="stat-amount">${imgInfo.likes}</p>
         </div>
          <div class="stats-unit">
          <p class="stat-header">Views</p>
          <p class ="stat-amount">${imgInfo.views}</p>
         </div>
            <div class="stats-unit">
          <p class="stat-header">Comments</p>
           <p class ="stat-amount">${imgInfo.comments}</p>
         </div>
          <div class="stats-unit">
          <p class="stat-header">Downloads</p>
           <p class ="stat-amount">${imgInfo.downloads}</p>
         </div>
        </div>
      </li>`
    )
    .join('');
};

function filterDublicateValues(text) {
  return text
    .split(', ')
    .filter((el, ind, arr) => arr.indexOf(el) === ind)
    .join(', ');
}
