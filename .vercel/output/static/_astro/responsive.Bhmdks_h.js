document.addEventListener("DOMContentLoaded",function(){var n=document.getElementById("logo"),e=document.getElementById("nombre");function o(){window.innerWidth<526?(e.style.display="none",n.style.marginLeft="0"):(e.style.display="block",n.style.marginLeft="8px;")}o(),window.addEventListener("resize",o)});document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("mobile-menu-toggle"),e=document.getElementById("mobile-menu");if(n&&e){let t=function(){window.innerWidth<433?e.classList.add("hidden"):e.classList.remove("hidden")};var o=t;n.addEventListener("click",function(){e.classList.toggle("hidden")}),t(),window.addEventListener("resize",t)}else console.error("No se encontraron los elementos con los ID 'mobile-menu-toggle' o 'mobile-menu'")});
