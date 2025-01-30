export const createGalleryCardTemplate = imgInfo => {
  return `<li class="gallery-item">
        <a class = 'large-img' href="${imgInfo.largeImageURL}">
          <img src="${imgInfo.webformatURL}" alt="${imgInfo.tags
    .split(', ')
    .slice(0, 4)
    .join(', ')}" loading="lazy" />
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
      </li>`;
};
