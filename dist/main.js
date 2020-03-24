!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t){const e=JSON.stringify(t);window.localStorage.setItem("project",e)}function o(t){const e=JSON.stringify(t);return window.localStorage.setItem("currentP",e),e}function i(){const t=localStorage.getItem("currentP");return JSON.parse(t)}function s(){const t=localStorage.getItem("project");return JSON.parse(t)}n.r(e);var c=function(){function t(t){return document.querySelector(t)}function e(){t("#task-modal").style.display="none"}function n(){t("#task-modal").style.display="block"}function r(){let e="";i().tasks.forEach(t=>{e+=`<div class="py-2 task-div ${t.status?"done":"not-yet"}">\n        <h5 class="text-center"> <span class="text-muted"> title:</span><br>${t.title}</h5>\n        <h5 class="text-center"> <span class="text-muted"> due date:</span><br>${t.date}</h5>\n        <h5 class="text-center"> <span class="text-muted"> priority:</span><br>${t.priority}</h5>\n        <h5 class="text-center text-break"> <span class="text-muted"> description:</span>${t.description}</h5>\n        <span class="col-10 m-auto d-flex justify-content-around"> <button class="btn btn-outline-primary" onclick="editTask(${t.id})">edit task</button> <button class="btn btn-outline-primary"  onclick="doneTask(${t.id})">done/undone</button> <button class="btn btn-outline-danger" onclick="deleteTask(${t.id})"> detete Task\n        </button></span>\n      </div>`}),t("#current-p").innerText=i().title,t("#current-p").classList="text-primary text-center",t("#current-tasks").innerHTML=e}function s(){document.querySelectorAll("#p-titles h3").forEach(e=>{const n=u(e.innerText);o(n),e.addEventListener("click",()=>{t("#current-p").innerText=`${e.innerText}`,o(n),r(),console.log(i())})})}return{getElement:t,getExt:function(){return t("#current-p").innerText},render:function(e,n){t(e).innerText=n},hide:e,show:n,setCurrent:s,renderProject:function(t,e){let n="";t.forEach(t=>{n+=`<h3 class="project ml-2 py-2 text-center ">${t.title}</h3>`}),document.getElementById(e).innerHTML=n,s()},renderTasks:r,renderModal:function(){return t("#new-t").addEventListener("click",n)},hideModal:function(){return t("#cancel").addEventListener("click",e)}}}();let a=[];function l(t,e){return{title:t,id:e,tasks:[]}}!function(){if(s())a=s();else{const t=l("general",1);o(t),a.push(t)}}();const u=t=>{let e;return a.forEach(n=>{n.title===t&&(e=n)}),e};function d(t,e,n,r){return{title:t,id:0,description:e,priority:n,date:r,status:!1}}function p(t){let e;return u(c.getExt()).tasks.forEach(n=>{n.id===t&&(e=n)}),e}window.deleteTask=function(t){const e=p(t),n=u(c.getExt());n.tasks.splice(n.tasks.indexOf(e),1),r(a),o(n),c.renderTasks()},window.doneTask=function(t){const e=p(t),n=u(c.getExt());n.tasks.forEach(t=>{t===e&&(t.status=!t.status)}),r(a),o(n),c.renderTasks()},window.editTask=function(t){c.getElement("#task-modal").innerHTML=(void 0)(t),c.show()},window.update=function(t){const e=p(t),n=u(c.getExt()),i=d(c.getElement("#title").value,c.getElement("#description").value,c.getElement("#priority").value,c.getElement("#date").value);i.id=e.id,i.status=e.status,n.tasks.splice(n.tasks.indexOf(e),1,i),r(a),o(n),window.cancel(),c.renderTasks()},window.cancel=function(){location.reload(!0)},c.renderTasks(),c.renderProject(a,"p-titles");const f=c.getElement("#create-p"),g=c.getElement("#create-t"),m=c.getElement("#delete-p");f.addEventListener("click",(function(){const t=c.getElement("#project-title").value,e=l(t,a.length);return!(!a.every(t=>t.title!==e.title)||""===t)&&(a.push(e),r(a),c.renderProject(s(),"p-titles"),!0)})),g.addEventListener("click",(function(){const t=c.getElement("#title").value,e=c.getElement("#description").value,n=c.getElement("#priority").value,i=c.getElement("#date").value,s=u(c.getExt()),l=d(t,e,n,i);var p,f;p=s,(f=l).id=p.tasks.length,p.tasks.push(f),r(a),o(s),c.hide()})),m.addEventListener("click",()=>{const t=u(c.getExt());return"general"===t.title?(c.getElement("#current-p").classList="text-danger text-center",c.getElement("#current-p").innerText="Can't delete general project",!1):(a.splice(a.indexOf(t),1),r(a),o(u("general")),location.reload(!0),!0)}),c.renderModal(),c.hideModal()}]);