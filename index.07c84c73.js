!function(){let e=document.querySelector(".gotop-wrapper");document.querySelector(".gototop"),window.addEventListener("scroll",()=>{let o=document.documentElement.scrollTop,t=document.documentElement.scrollHeight,d=window.innerHeight;o+d>=t-140?e.classList.add("show"):e.classList.remove("show")}),(()=>{let e=document.querySelectorAll("[data-modal-open]"),o=document.querySelectorAll("[data-modal-close]"),t=document.querySelectorAll("[data-modal]");e.forEach(e=>{e.addEventListener("click",()=>{let o=e.getAttribute("data-modal-open"),t=document.querySelector(`[data-modal="${o}"]`);t.classList.add("is-open"),"team-modal"!==o&&document.body.classList.add("modal-open")})}),o.forEach(e=>{e.addEventListener("click",()=>{let o=e.closest("[data-modal]");o.classList.remove("is-open"),document.body.classList.remove("modal-open")})}),document.addEventListener("keydown",e=>{"Escape"===e.key&&t.forEach(e=>{e.classList.contains("is-open")&&(e.classList.remove("is-open"),document.body.classList.remove("modal-open"))})}),t.forEach(e=>{e.addEventListener("click",o=>{o.target===e&&(e.classList.remove("is-open"),document.body.classList.remove("modal-open"))})})})()}();
//# sourceMappingURL=index.07c84c73.js.map
