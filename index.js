import{a as f,S as h,i as l}from"./assets/vendor-C_7oAj77.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const u={position:"topRight",timeout:8e3,backgroundColor:"#ef4040",titleColor:" #fafafb",messageColor:" #fafafb",iconUrl:"./src/img/icon.svg"},g={position:"topRight",timeout:5e3,backgroundColor:"#4e75ff",titleColor:"rgb(255, 255, 255",messageColor:"rgb(255, 255, 255)"},a={searchForm:document.querySelector(".js-form"),galleryList:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".next-page-btn")},m=t=>t.map(e=>`<li class="gallery-item">
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
      </li>`).join("");function L(t){return t.split(", ").filter((e,i,n)=>n.indexOf(e)===i).join(", ")}const b="48449909-94b1753e13b470dade065bce0",v="https://pixabay.com/api/",P={key:b,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:15},p=(t,e=1)=>{const i=new URLSearchParams({...P,q:t,page:e});return f.get(`${v}?${i}`)},o={query:"",currentPage:1},y=new h(".js-gallery a",{captionsData:"alt",captionsDelay:250}),c=t=>{a.loader.style.display=t?"block":"none"},S=async t=>{try{if(t.preventDefault(),o.query=t.currentTarget.elements.name_query.value.trim(),o.query===""){l.warning({...g,title:"Warning",message:"Empty field , please insert your query..."});return}c(!0),a.galleryList.innerHTML="",a.loadMoreBtn.classList.add("is-hidden"),o.currentPage=1;const{data:e}=await p(o.query,o.currentPage);if(c(!1),e.hits.length===0||e.totalHits===0){l.error({...u,title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),a.searchForm.reset();return}a.galleryList.innerHTML=m(e.hits),y.refresh(),a.loadMoreBtn.classList.remove("is-hidden")}catch(e){console.log(e),l.error({...u,title:"Error",message:"Something went wrong... Please try again later."})}},w=async()=>{o.currentPage+=1,c(!0);try{const{data:{hits:t,totalHits:e}}=await p(o.query,o.currentPage),i=Math.ceil(e/15),n=m(t);a.galleryList.insertAdjacentHTML("beforeend",n),y.refresh(),c(!1),o.currentPage>=i&&(a.loadMoreBtn.classList.add("is-hidden"),l.warning({...g,title:"Warning",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.error(t),c(!1),l.error({...u,title:"Error",message:"Failed to load more images. Please try again later."})}};a.searchForm.addEventListener("submit",S);a.loadMoreBtn.addEventListener("click",w);
//# sourceMappingURL=index.js.map
