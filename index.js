"use strict";var input=document.getElementById("main__input"),btn_close=document.getElementById("main__icon--cross"),btn_search=document.getElementById("main__button--search"),btn_lucky=document.getElementById("main__button--lucky"),user_image=document.getElementById("menu__image");input.addEventListener("input",(function(){""==input.value?btn_close.classList.remove("main__icon--show"):btn_close.classList.add("main__icon--show")})),btn_close.addEventListener("click",(function(){input.value="",btn_close.classList.remove("main__icon--show")})),window.addEventListener("keydown",(function(e){if("Enter"===e.key&&(e.preventDefault(),""!==input.value)){var n=input.value.replace(/\s/g,"+");window.location.href="https://www.google.com/search?q=".concat(n)}})),btn_search.addEventListener("click",(function(e){if(e.preventDefault(),""!==input.value){var n=input.value.replace(/\s/g,"+");window.location.href="https://www.google.com/search?q=".concat(n)}})),btn_lucky.addEventListener("click",(function(e){if(e.preventDefault(),""!==input.value){var n=input.value.replace(/\s/g,"+");window.location.href="https://www.google.com/search?q=".concat(n,"&btnI")}})),fetch("https://api.github.com/users/luisfalconmx").then((function(e){return e.json()})).then((function(e){user_image.style.backgroundImage="url('".concat(e.avatar_url,"')")}));