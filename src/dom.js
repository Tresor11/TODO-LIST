/* eslint-disable func-names */
// eslint-disable-next-line func-names
// eslint-disable-next-line no-unused-vars
import { project, createProject, myTask } from './project';

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

  function getExt(id) {
    const text = getElement(id).innerText;
    return text;
  }

  function render(id, cont) {
    getElement(id).innerText = cont;
  }

  function renderTasks() {
    const projects = document.querySelectorAll('#p-titles h3');
    projects.forEach(project => {
      project.addEventListener('click', () => { getElement('#current-p').innerText = `${project.innerText}`; });
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