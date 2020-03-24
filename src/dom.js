/* eslint-disable func-names */
/* eslint-disable-next-line func-names */
/* eslint-disable-next-line no-unused-vars */
import {
  storeProject, getProject, currentP, getCurrentP,
} from './storage';
import {
  project, createProject, myTask, findProject,
} from './project';


const dom = (function () {
  function getElement(property) {
    return document.querySelector(property);
  }


  function renderModal() {
    return getElement('#new-t').addEventListener('click', show);
  }

  function hideModal() {
    return getElement('#cancel').addEventListener('click', hide);
  }

  function getExt() {
    const text = getElement('#current-p').innerText;
    return text;
  }

  function renderTasks() {
    let currentHtml = '';
    getCurrentP().tasks.forEach(element => {
      currentHtml += `<div class="py-2 task-div ${element.status ? 'done' : 'not-yet'}">
        <h5 class="text-center"> <span class="text-muted"> title:</span><br>${element.title}</h5>
        <h5 class="text-center"> <span class="text-muted"> due date:</span><br>${element.date}</h5>
        <h5 class="text-center"> <span class="text-muted"> priority:</span><br>${element.priority}</h5>
        <h5 class="text-center text-break"> <span class="text-muted"> description:</span>${element.description}</h5>
        <span class="col-10 m-auto d-flex justify-content-around"> <button class="btn btn-outline-primary" onclick="editTask(${element.id})">edit task</button> <button class="btn btn-outline-primary"  onclick="doneTask(${element.id})">done/undone</button> <button class="btn btn-outline-danger" onclick="deleteTask(${element.id})"> detete Task
        </button></span>
      </div>`;
    });
    getElement('#current-p').innerText = getCurrentP().title;
    getElement('#current-p').classList = 'text-primary text-center';
    getElement('#current-tasks').innerHTML = currentHtml;
  }

  function render(id, cont) {
    getElement(id).innerText = cont;
  }

  function setCurrent() {
    const projects = document.querySelectorAll('#p-titles h3');
    projects.forEach(project => {
      const currentTasks = findProject(project.innerText);
      currentP(currentTasks);
      project.addEventListener('click', () => { getElement('#current-p').innerText = `${project.innerText}`; currentP(currentTasks); renderTasks(); console.log(getCurrentP()); });
    });
  }

  function renderProject(arr, id) {
    let content = '';
    arr.forEach(element => {
      content += `<h3 class="project ml-2 py-2 text-center ">${element.title}</h3>`;
    });
    document.getElementById(id).innerHTML = content;
    setCurrent();
  }

  function hide() {
    getElement('#task-modal').style.display = 'none';
  }

  function show() {
    getElement('#task-modal').style.display = 'block';
  }

  return {
    getElement,
    getExt,
    render,
    hide,
    show,
    setCurrent,
    renderProject,
    renderTasks,
    renderModal,
    hideModal,
  };
}());

export default dom;