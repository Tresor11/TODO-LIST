!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){const t=JSON.stringify(e);window.localStorage.setItem("project",t)}function o(){const e=localStorage.getItem("project");return JSON.parse(e)}n.r(t);var i=function(){function e(e){return document.querySelector(e)}function t(){document.querySelectorAll("#p-titles h3").forEach(t=>{const n=s(t.innerText).tasks;let r="";n.forEach(e=>{r+=`<div class="py-2 task-div">\n        <h5 class="text-center"> <span class="text-muted"> title:</span><br>${e.title}</h5>\n        <h5 class="text-center"> <span class="text-muted"> due date:</span><br>${e.date}</h5>\n        <h5 class="text-center text-break"> <span class="text-muted"> description:</span>${e.description}</h5>\n        <span class="col-10 m-auto d-flex justify-content-around"> <button class="btn btn-outline-primary">edit task</button> <button class="btn btn-outline-primary">done/undone</button> <button class="btn btn-outline-danger" onclick="deleteTask(${e.id})"> detete Task\n        </button></span>\n      </div>`}),t.addEventListener("click",()=>{e("#current-p").innerText=`${t.innerText}`,e("#current-tasks").innerHTML=r})})}function n(){e("#task-modal").style.display="none"}function r(){e("#task-modal").style.display="block"}return{getElement:e,getExt:function(){return e("#current-p").innerText},render:function(t,n){e(t).innerText=n},hide:n,show:r,renderTasks:t,renderProject:function(e,n){let r="";e.forEach(e=>{r+=`<h3 class="project ml-2 py-2 text-center ">${e.title}</h3>`}),document.getElementById(n).innerHTML=r,t()},renderModal:function(){return e("#new-t").addEventListener("click",r)},hideModal:function(){return e("#cancel").addEventListener("click",n)}}}();let c=[];function l(e,t){return{title:e,id:t,tasks:[]}}!function(){if(o())c=o();else{const e=l("general",1);c.push(e)}}();const s=e=>{let t;return c.forEach(n=>{n.title===e&&(t=n)}),t};window.deleteTask=function(e){const t=function(e){let t;return s(i.getExt()).tasks.forEach(n=>{n.id===e&&(t=n)}),t}(e),n=s(i.getExt());n.tasks.splice(n.tasks.indexOf(t),1),r(c),location.reload(!0)},window.editTask=function(e){},i.renderProject(c,"p-titles");const a=i.getElement("#create-p"),u=i.getElement("#create-t"),d=i.getElement("#delete-p");a.addEventListener("click",(function(){const e=i.getElement("#project-title").value,t=l(e,c.length);return!(!c.every(e=>e.title!==t.title)||""===e)&&(c.push(t),r(c),i.renderProject(o(),"p-titles"),!0)})),u.addEventListener("click",(function(){const e=i.getElement("#title").value,t=i.getElement("#description").value,n=i.getElement("#priority").value,o=i.getElement("#date").value,l=s(i.getExt());var a,u;(u={title:e,id:0,description:t,priority:n,date:o}).id=(a=l).tasks.length,a.tasks.push(u),i.hide(),r(c),i.renderTasks()})),d.addEventListener("click",()=>{const e=s(i.getExt());c.splice(c.indexOf(e),1),r(c),location.reload(!0)}),i.renderModal(),i.hideModal()}]);