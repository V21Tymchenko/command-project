var t=document.getElementById("myModal"),e=document.getElementById("myBtn"),n=document.getElementsByClassName("about-us__button")[0];e.onclick=function(){t.style.display="block"},n.onclick=function(){t.style.display="none"},window.onclick=function(e){e.target==t&&(t.style.display="none")};const o=document.querySelectorAll('a[href*="#"]');for(let t of o)t.addEventListener("click",(function(e){e.preventDefault();const n=t.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}));
//# sourceMappingURL=index.d3ca33e0.js.map