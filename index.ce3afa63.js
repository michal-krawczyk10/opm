!function(e){var t={};function r(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(o,s,function(t){return e[t]}.bind(null,s));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){},,function(e,t,r){"use strict";r.r(t);r(0);function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));var c=document.querySelector(".frame__first--js"),l=document.querySelector(".frame__workout--js"),u=document.querySelector(".frame__history--js"),d=document.querySelector(".frame__settings--js"),f=document.querySelector(".frame__standard--js"),y=document.querySelector(".frame__modify--js"),m=document.querySelector(".frame__level--js"),h=document.querySelector(".frame__action--js"),S=document.querySelector(".frame__done--js"),g=document.querySelector(".squats_action--js"),v=document.querySelector(".situps_action--js"),p=document.querySelector(".pushups_action--js"),L=document.querySelector(".frame__repeat--js"),j=document.querySelector(".frame__about--js"),q=document.querySelector(".sqFirst--js"),E=document.querySelector(".siFirst--js"),b=document.querySelector(".puFirst--js"),I=document.querySelectorAll(".more--js"),O=document.querySelector(".part_done--js"),_=document.querySelector(".start--js"),k=document.querySelector(".history--js"),w=document.querySelector(".settings--js"),N=document.querySelector(".standard--js"),J=document.querySelector(".level--js"),M=document.querySelector(".modify--js"),A=document.querySelectorAll(".to_workout--js"),T=document.querySelectorAll(".go--js"),P=document.querySelectorAll(".done--js"),H=document.querySelectorAll(".home--js"),x=document.querySelectorAll(".next--js"),D=document.querySelectorAll(".repeat--js"),Y=document.querySelectorAll(".deleteRecord--js"),W=document.querySelector(".about--js"),F=document.querySelectorAll(".go_on--js");function C(){f.classList.add("hide"),y.classList.add("hide"),h.classList.remove("hide"),me()}function R(){S.classList.add("hide"),l.classList.add("hide"),d.classList.add("hide"),u.classList.add("hide"),m.classList.add("hide"),L.classList.add("hide"),j.classList.add("hide"),c.classList.remove("hide"),U()}function G(){var e=localStorage.getItem("exercises"),t=JSON.parse(e);t&&Object.getOwnPropertyNames(t).forEach((function(e){V.forEach((function(r){r.innerHTML+='<p class="exercise_set">'.concat(e,": ").concat(t[e],"</p>")}))}))}function U(){document.querySelectorAll(".exercise_set").forEach((function(e){e.remove()}))}_.addEventListener("click",(function(){c.classList.add("hide"),l.classList.remove("hide"),G(),function(){var e=localStorage.getItem("history");JSON.parse(e)[0].currentDay!==Le&&(de=0,localStorage.setItem("daily situps",JSON.stringify(de)),ye=0,localStorage.setItem("daily pushups",JSON.stringify(ye)),le=0,localStorage.setItem("daily squats",JSON.stringify(le)))}()})),k.addEventListener("click",(function(){l.classList.add("hide"),u.classList.remove("hide"),je=localStorage.getItem("history"),JSON.parse(je).forEach((function(e){Ee.innerHTML+='<p class="records--js">'.concat(e.currentDay,": <span>sit ups: ").concat(e.dailySitups,"; </span><span>squats: ").concat(e.dailySquats,"; </span><span>push ups: ").concat(e.dailyPushups,"</span></p>")}))})),w.addEventListener("click",(function(){c.classList.add("hide"),d.classList.remove("hide")})),N.addEventListener("click",(function(){l.classList.add("hide"),f.classList.remove("hide")})),M.addEventListener("click",(function(){f.classList.add("hide"),l.classList.add("hide"),y.classList.remove("hide")})),T.forEach((function(e){return e.addEventListener("click",C)})),T.forEach((function(e){return e.addEventListener("click",U)})),Y.forEach((function(e){return e.addEventListener("click",be)})),A.forEach((function(e){return e.addEventListener("click",(function(){f.classList.add("hide"),y.classList.add("hide"),l.classList.remove("hide")}))})),P.forEach((function(e){return e.addEventListener("click",(function(){h.classList.add("hide"),S.classList.remove("hide")}))})),H.forEach((function(e){return e.addEventListener("click",R)})),x.forEach((function(e){return e.addEventListener("click",(function(){O.classList.add("hide"),me()}))})),D.forEach((function(e){return e.addEventListener("click",(function(){ve=!1,he=!1,Se=!1,ge=!1,L.classList.add("hide"),h.classList.remove("hide"),me()}))})),W.addEventListener("click",(function(){c.classList.add("hide"),j.classList.remove("hide")}));var V=document.querySelectorAll(".exercise_set--js");J.addEventListener("click",(function(){y.classList.add("hide"),m.classList.remove("hide")})),document.querySelectorAll(".to_modify--js").forEach((function(e){e.addEventListener("click",(function(){m.classList.add("hide"),y.classList.remove("hide")}))}));var $=document.querySelector(".l1--js"),z=document.querySelector(".l2--js"),B=document.querySelector(".l3--js"),K=document.querySelector(".l4--js"),Q=document.querySelector(".l5--js"),X=document.querySelector(".l6--js"),Z=document.querySelector(".l7--js"),ee=document.querySelector(".l8--js"),te=document.querySelector(".l9--js"),re=document.querySelector(".l10--js");localStorage.getItem("level")||localStorage.setItem("level",1),$.addEventListener("click",(function(){localStorage.setItem("level",1),oe.forEach((function(e){e.innerHTML="1"})),se(),U(),G()})),z.addEventListener("click",(function(){localStorage.setItem("level",2),oe.forEach((function(e){e.innerHTML="2"})),se(),U(),G()})),B.addEventListener("click",(function(){localStorage.setItem("level",3),oe.forEach((function(e){e.innerHTML="3"})),se(),U(),G()})),K.addEventListener("click",(function(){localStorage.setItem("level",4),oe.forEach((function(e){e.innerHTML="4"})),se(),U(),G()})),Q.addEventListener("click",(function(){localStorage.setItem("level",5),oe.forEach((function(e){e.innerHTML="5"})),se(),U(),G()})),X.addEventListener("click",(function(){localStorage.setItem("level",6),oe.forEach((function(e){e.innerHTML="6"})),se(),U(),G()})),Z.addEventListener("click",(function(){localStorage.setItem("level",7),oe.forEach((function(e){e.innerHTML="7"})),se(),U(),G()})),ee.addEventListener("click",(function(){localStorage.setItem("level",8),oe.forEach((function(e){e.innerHTML="8",se(),U(),G()}))})),te.addEventListener("click",(function(){localStorage.setItem("level",9),oe.forEach((function(e){e.innerHTML="9"})),se(),U(),G()})),re.addEventListener("click",(function(){localStorage.setItem("level",10),oe.forEach((function(e){e.innerHTML="10"})),se(),U(),G()}));var oe=document.querySelectorAll(".level_display--js");function se(){var e=localStorage.getItem("level"),t="";e&&(t=e),localStorage.setItem("exercises",JSON.stringify({squats:10*t,situps:10*t,pushups:10*t})),oe.forEach((function(e){e.innerHTML=t}))}se();var ne=document.querySelector(".squats__count--js"),ie=document.querySelector(".situps__count--js"),ae=document.querySelector(".pushups__count--js"),ce=localStorage.getItem("daily squats"),le=0;ce?le=JSON.parse(ce):(localStorage.setItem("daily squats",JSON.stringify(0)),le=ce);var ue=localStorage.getItem("daily situps"),de=0;ue?de=JSON.parse(ue):(localStorage.setItem("daily situps",JSON.stringify(0)),de=ue);var fe=localStorage.getItem("daily pushups"),ye=0;function me(){var e=localStorage.getItem("exercises"),t=JSON.parse(e),r=t.squats,o=t.pushups,s=t.situps;!0===ve?(f.classList.add("hide"),h.classList.add("hide"),L.classList.remove("hide")):r&&!0!==he?(ne.innerHTML="do 10 squats",function(){v.classList.add("hide"),p.classList.add("hide"),g.classList.remove("hide");var e=0,t=localStorage.getItem("level"),r="";t&&(r=t);0===e&&(q.classList.remove("hide"),e++,F.forEach((function(t){return t.addEventListener("click",(function(){if(0!==e&&e<r){q.classList.add("hide"),I.forEach((function(e){return e.classList.remove("hide")}));var t=localStorage.getItem("daily squats");le=JSON.parse(t),le+=10,localStorage.setItem("daily squats",JSON.stringify(le)),e++,console.log(e)}else if(e==r){var o=localStorage.getItem("daily squats");le=JSON.parse(o),le+=10,localStorage.setItem("daily squats",JSON.stringify(le)),q.classList.add("hide"),I.forEach((function(e){return e.classList.add("hide")})),O.classList.remove("hide"),console.log("else"),e=0}}))})))}(),he=!0,qe()):o&&!0!==ge?(ae.innerHTML="do 10 push ups",function(){v.classList.add("hide"),p.classList.remove("hide"),g.classList.add("hide");var e=0,t=localStorage.getItem("level"),r="";t&&(r=t);0===e&&(b.classList.remove("hide"),e++,F.forEach((function(t){return t.addEventListener("click",(function(){if(0!==e&&e<r){b.classList.add("hide"),I.forEach((function(e){return e.classList.remove("hide")}));var t=localStorage.getItem("daily pushups");ye=JSON.parse(t),ye+=10,localStorage.setItem("daily pushups",JSON.stringify(ye)),e++,console.log(e)}else if(e==r){var o=localStorage.getItem("daily pushups");ye=JSON.parse(o),ye+=10,localStorage.setItem("daily pushups",JSON.stringify(ye)),b.classList.add("hide"),I.forEach((function(e){return e.classList.add("hide")})),O.classList.remove("hide"),console.log("else"),e=0}}))})))}(),ge=!0,qe()):s&&!0!==Se?(ie.innerHTML="do 10 sit ups",function(){v.classList.remove("hide"),p.classList.add("hide"),g.classList.add("hide");var e=0,t=localStorage.getItem("level"),r="";t&&(r=t);0===e&&(E.classList.remove("hide"),e++,F.forEach((function(t){return t.addEventListener("click",(function(){if(0!==e&&e<r){E.classList.add("hide"),I.forEach((function(e){return e.classList.remove("hide")}));var t=localStorage.getItem("daily situps");de=JSON.parse(t),de+=10,localStorage.setItem("daily situps",JSON.stringify(de)),e++,console.log(e)}else if(e==r){var o=localStorage.getItem("daily situps");de=JSON.parse(o),de+=10,localStorage.setItem("daily situps",JSON.stringify(de)),E.classList.add("hide"),I.forEach((function(e){return e.classList.add("hide")})),O.classList.remove("hide"),console.log("else"),e=0}}))})))}(),Se=!0,qe()):(v.classList.add("hide"),p.classList.add("hide"),g.classList.add("hide"),h.classList.add("hide"),S.classList.remove("hide"),console.log("done"),ve=!0)}fe?ye=JSON.parse(fe):(localStorage.setItem("daily pushups",JSON.stringify(0)),ye=fe);var he=!1,Se=!1,ge=!1,ve=!1,pe=(new Date).toLocaleString("pl-PL").slice(0,10),Le=pe,je=localStorage.getItem("history");function qe(){var e=localStorage.getItem("history"),t=JSON.parse(e);if(t[0].currentDay===Le){var r=t.findIndex((function(e){return e.currentDay===Le})),s=i(i({},t[r]),{},{dailySitups:de,dailyPushups:ye,dailySquats:le}),n=[].concat(o(t.slice(0,r)),[s],o(t.slice(r+1)));localStorage.setItem("history",JSON.stringify(n))}else t.unshift({currentDay:pe,dailySitups:de,dailyPushups:ye,dailySquats:le}),localStorage.setItem("history",JSON.stringify(t))}je||(localStorage.setItem("history",JSON.stringify([{currentDay:pe,dailySitups:de,dailyPushups:ye,dailySquats:le}])),je=localStorage.getItem("history"));var Ee=document.querySelector(".history__display--js");function be(){document.querySelectorAll(".records--js").forEach((function(e){e.remove()}))}var Ie=["Human beings are strong because we have the ability to change ourselves.","If you really want to be strong, stop caring about what others think about you.","I’ll leave tomorrow’s problems to tomorrow’s me.","Do not fight alone.","You gotta train like hell until the point where your hair falls out. That’s the only way to become truly strong.","100 push-ups, 100 sit-ups, 100 squats, and a 10km run EVERY SINGLE DAY!","A hero must be tough, strong and beautiful ,as well as be able to promptly and splendidly eradicate evil.","You have to keep doing it. No matter how difficult it gets.","I do it because I want to!","You are too young to worry about failure.","Instead of sitting around frustrated, it is better to keep on moving forward.","Human beings are strong because we have the ability to change ourselves.","Is that the limit of your strength? Could the you of tomorrow beat you of today? Instead of giving in, move forward.","If the heroes run and hide, who will stay and fight?","You said you worked hard? Well, maybe you need to work a little longer.","If you don’t want to get bossed around or mocked by the people around you… you just need to become stronger."],Oe=Math.floor(Math.random()*Ie.length);document.querySelector(".quote--js").innerHTML=Ie[Oe]}]);