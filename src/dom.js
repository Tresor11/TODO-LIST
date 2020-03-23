/* eslint-disable func-names */
// eslint-disable-next-line func-names
// eslint-disable-next-line no-unused-vars
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




  function render(id, cont) {
    getElement(id).innerText = cont;
  }

  function renderTasks() {
    const projects = document.querySelectorAll('#p-titles h3');
    projects.forEach(project => {
      let currentTasks = '';
      findProject(getExt()).tasks.forEach(el => {
        currentTasks + =` <h5 class="text-center"> <span class="text-muted"> title:</span><br>${el.title}</h5>
        <h5 class="text-center"> <span class="text-muted"> due date:</span><br>23-3-2020</h5>
        <h5 class="text-center"> <span class="text-muted"> priority:</span><br>${el.priority}</h5>
        <h5 class="text-center text-break"> <span class="text-muted"> description:</span><br>${el.description}</h5>
        <span class="col-10 m-auto d-flex justify-content-around"> <button class="btn btn-outline-primary">new task</button> <button class="btn btn-outline-primary">done/undone</button> <button class="btn btn-outline-danger"> detete project
        </button></span>`;
      });
      project.addEventListener('click', () => { getElement('#current-p').innerText = `${project.innerText}`; getElement('#current-tasks').innerHTML = currentTasks; });
    });
  }

  function renderProject(arr, id) {
    let content = '';
    arr.forEach(element => {
      content += `<h3 class="project ml-2 py-2 text-center ">${element.title}</h3>`;
    });
    document.getElementById(id).innerHTML = content;
    renderTasks();
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
    renderProject,
    renderModal,
    hideModal,
  };
}());

export default dom;