!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(){function t(t){return document.querySelector(t)}function e(){t("#task-modal").style.display="none"}function n(){t("#task-modal").style.display="block"}return{getElement:t,getExt:function(e){return t(e).innerText},render:function(e,n){t(e).innerText=n},hide:e,show:n,renderProject:function(e,n){let r="";e.forEach(t=>{r+=`<h3 class="project ml-2 py-2 text-center ">${t.title}</h3>`}),document.getElementById(n).innerHTML=r,document.querySelectorAll("#p-titles h3").forEach(e=>{const n=` <div class="py-2">\n      <h3 class="text-primary text-center">${e.innerText} tasks</h3>\n      <span class="col-6 m-auto d-flex justify-content-around"> <button class="btn btn-outline-primary" id="new-t">new task <i\n            class="fas fa-arrow-circle-down    "></i> </button> <button class="btn btn-outline-danger"> detete project\n          <i class="fas fa-recycle    "></i></button></span>\n    </div>`;e.addEventListener("click",()=>{t("#p-tasks").innerHTML=n})})},renderModal:function(){return t("#new-t").addEventListener("click",n)},hideModal:function(){return t("#cancel").addEventListener("click",e)}}}();const i=[{title:"testing",id:1,tasks:[],addTask:t=>{t.id=i.tasks.length,i.tasks.push(t)}},{title:"test",id:1,tasks:[],addTask:t=>{t.id=i.tasks.length,i.tasks.push(t)}}];r.renderProject(i,"p-titles");const o=r.getElement("#create-p"),l=r.getElement("#create-t");o.addEventListener("click",(function(){const t=function(t,e){const n=[];return{title:t,id:e,tasks:n,addTask:t=>{t.id=n.length,n.push(t)}}}(r.getElement("#project-title").value,i.length);return!!i.every(e=>e.title!==t.title)&&(i.push(t),r.renderProject(i,"p-titles"),!0)})),l.addEventListener("click",(function(){const t=r.getElement("#title").value,e=r.getElement("#description").value,n=r.getElement("#priority").value,o=(t=>{i.forEach(e=>{if(e.title===t)return e})})("testing"),l={title:t,id:e,description:n,priority:"2020-12-10",date:c};var c;o.addTask(l),console.log(o)})),r.renderModal(),r.hideModal()}]);