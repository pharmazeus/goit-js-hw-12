import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { errorToastStyles, warningToastStyles } from './js/toast-styles';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import domRefs from './js/refs.js';
import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPicsByQuery } from './js/pixabay-api.js';
//
const searchState = {
  query: '',
  currentPage: 1,
};

const simpleLightboxInstance = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

const toggleLoader = isLoading => {
  domRefs.loader.style.display = isLoading ? 'block' : 'none';
};
//Call fn when submit
const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchState.query = event.currentTarget.elements.name_query.value.trim();

    if (searchState.query === '') {
      iziToast.warning({
        ...warningToastStyles,
        title: 'Warning',
        message: 'Empty field , please insert your query...',
      });
      return;
    }

    toggleLoader(true);
    domRefs.galleryList.innerHTML = '';
    domRefs.loadMoreBtn.classList.add('is-hidden');
    searchState.currentPage = 1;

    const { data } = await fetchPicsByQuery(searchState.query, searchState.currentPage);

    toggleLoader(false);

    if (data.hits.length === 0 || data.totalHits === 0) {
      iziToast.error({
        ...errorToastStyles,
        title: '',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });

      domRefs.searchForm.reset();
      return;
    }

    domRefs.galleryList.innerHTML = createGalleryCardTemplate(data.hits);

    simpleLightboxInstance.refresh();

    domRefs.loadMoreBtn.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
    iziToast.error({
      ...errorToastStyles,
      title: 'Error',
      message: 'Something went wrong... Please try again later.',
    });
  }
};

const onLoadMoreClick = async () => {
  searchState.currentPage += 1;
  toggleLoader(true);

  try {
    const {
      data: { hits, totalHits },
    } = await fetchPicsByQuery(searchState.query, searchState.currentPage);

    const totalPages = Math.ceil(totalHits / 15);

    const markup = createGalleryCardTemplate(hits);

    domRefs.galleryList.insertAdjacentHTML('beforeend', markup);

    simpleLightboxInstance.refresh();
    toggleLoader(false);

    if (searchState.currentPage >= totalPages) {
      domRefs.loadMoreBtn.classList.add('is-hidden');
      iziToast.warning({
        ...warningToastStyles,
        title: 'Warning',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (err) {
    console.error(err);
    toggleLoader(false);
    iziToast.error({
      ...errorToastStyles,
      title: 'Error',
      message: 'Failed to load more images. Please try again later.',
    });
  }
};

domRefs.searchForm.addEventListener('submit', onSearchFormSubmit);

domRefs.loadMoreBtn.addEventListener('click', onLoadMoreClick);
