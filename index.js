import{a as f,S as y,i as n}from"./assets/vendor-C_7oAj77.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const u={position:"topRight",timeout:6e3,backgroundColor:"#ef4040",titleColor:" #fafafb",messageColor:" #fafafb",iconUrl:new URL("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969a.75.75%200%200%201%201.062%200L12%2010.939l3.969-3.97a.75.75%200%201%201%201.062%201.062L13.061%2012l3.97%203.969a.752.752%200%200%201-1.062%201.062L12%2013.061l-3.969%203.97a.752.752%200%200%201-1.282-.531.751.751%200%200%201%20.22-.531L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'%20fill='%23FAFAFB'/%3e%3c/svg%3e",import.meta.url).href},g={position:"topRight",timeout:5e3,backgroundColor:"#4e75ff",titleColor:"rgb(255, 255, 255",messageColor:"rgb(255, 255, 255)"},s={searchForm:document.querySelector(".js-form"),galleryList:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".next-page-btn")},m=t=>t.map(e=>`<li class="gallery-item">
        <a class = 'large-img' href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${L(e.tags)}" loading="lazy" />
        </a>
        <div class="post-stats">
         <div class="stats-unit">
          <p class="stat-header">Likes</p>
          <p class ="stat-amount">${e.likes}</p>
         </div>
          <div class="stats-unit">
          <p class="stat-header">Views</p>
          <p class ="stat-amount">${e.views}</p>
         </div>
            <div class="stats-unit">
          <p class="stat-header">Comments</p>
           <p class ="stat-amount">${e.comments}</p>
         </div>
          <div class="stats-unit">
          <p class="stat-header">Downloads</p>
           <p class ="stat-amount">${e.downloads}</p>
         </div>
        </div>
      </li>`).join("");function L(t){return t.split(", ").filter((e,i,l)=>l.indexOf(e)===i).join(", ")}const v="48449909-94b1753e13b470dade065bce0",b="https://pixabay.com/api/",w={key:v,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:15},p=(t,e=1)=>{const i=new URLSearchParams({...w,q:t,page:e});return f.get(`${b}?${i}`)},o={query:"",currentPage:1},h=new y(".js-gallery a",{captionsData:"alt",captionsDelay:250}),c=t=>{s.loader.style.display=t?"block":"none"},P=async t=>{try{if(t.preventDefault(),o.query=t.currentTarget.elements.name_query.value.trim(),o.query===""){n.warning({...g,title:"Warning",message:"Empty field , please insert your query..."});return}c(!0),s.galleryList.innerHTML="",s.loadMoreBtn.classList.add("is-hidden"),o.currentPage=1;const{data:e}=await p(o.query,o.currentPage);if(c(!1),e.hits.length===0||e.totalHits===0){n.error({...u,title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),s.searchForm.reset();return}s.galleryList.innerHTML=m(e.hits),h.refresh(),s.loadMoreBtn.classList.remove("is-hidden")}catch(e){console.log(e),n.error({...u,title:"Error",message:"Something went wrong... Please try again later."})}},S=async()=>{o.currentPage+=1,c(!0);try{const{data:{hits:t,totalHits:e}}=await p(o.query,o.currentPage),i=Math.ceil(e/15),l=m(t);s.galleryList.insertAdjacentHTML("beforeend",l),h.refresh(),c(!1),o.currentPage>=i&&(s.loadMoreBtn.classList.add("is-hidden"),n.warning({...g,title:"Warning",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.error(t),c(!1),n.error({...u,title:"Error",message:"Failed to load more images. Please try again later."})}};s.searchForm.addEventListener("submit",P);s.loadMoreBtn.addEventListener("click",S);
//# sourceMappingURL=index.js.map
