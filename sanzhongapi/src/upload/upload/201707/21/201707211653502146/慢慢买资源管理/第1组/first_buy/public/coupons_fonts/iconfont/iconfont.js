(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-egengduoxiazaiapp" viewBox="0 0 1025 1024">'+""+'<path d="M289.714952 519.2955c-10.222296 10.219226-10.222296 26.793488 0 37.014761l203.57402 203.57402c0.075728 0.075728 0.154527 0.145316 0.231278 0.218998 4.659337 4.861961 11.213927 7.893139 18.480773 7.893139 7.259682 0 13.81018-3.027085 18.469516-7.882906 0.079822-0.077775 0.16169-0.150433 0.241512-0.229232l203.57402-203.57402c10.222296-10.222296 10.222296-26.795535 0-37.014761-10.222296-10.219226-26.792465-10.219226-37.012714 0L537.600256 678.966555 537.600256 76.799744c0-14.138677-11.463626-25.600256-25.600256-25.600256-14.138677 0-25.600256 11.460556-25.600256 25.600256l0 602.167834L326.727666 519.2955C316.50844 509.076274 299.934177 509.076274 289.714952 519.2955zM793.599744 179.199744 665.599488 179.199744l0 51.197442 128.000256 0c56.55266 0 102.4 45.84734 102.4 102.402047l0 511.997953c0 56.55573-45.84734 102.402047-102.4 102.402047L230.400256 947.199232c-56.55266 0-102.4-45.84734-102.4-102.402047L128.000256 332.800256c0-56.55573 45.84734-102.402047 102.4-102.402047L358.399488 230.398209 358.399488 179.199744 230.400256 179.199744c-84.831036 0-153.599488 68.769475-153.599488 153.599488l0 511.997953c0 84.833083 68.769475 153.602558 153.599488 153.602558l563.199488 0c84.831036 0 153.599488-68.769475 153.599488-153.602558L947.199232 332.800256C947.200256 247.969219 878.430781 179.199744 793.599744 179.199744z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-angle-right" viewBox="0 0 1024 1024">'+""+'<path d="M233.962 551.219l392.261 391.876c21.655 21.657 56.784 21.657 78.442 0 21.711-21.654 21.711-56.731 0-78.386l-352.987-352.687 352.987-352.74c21.711-21.653 21.711-56.731 0-78.383-21.658-21.658-56.786-21.658-78.442 0l-392.261 391.934c-21.652 21.597-21.652 56.731 0 78.386z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)