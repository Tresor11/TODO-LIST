/* eslint-disable func-names */
// eslint-disable-next-line func-names
// eslint-disable-next-line no-unused-vars
import { project, createProject, myTask } from './project';

const dom = (function () {
  function getElement(property) {
    return document.querySelector(property);
  }


  function renderModal() {
    // const butttons = document.querySelectorAll('.new-t');
    // butttons.forEach(el=>{el.addEventListener('click',()=>{alert("hello")})});
    alert('hello');
  }

  function getId(id) {
    const intId = getElement(id).id;
    // eslint-disable-next-line radix
    return parseInt(intId);
  }

  function render(id, cont) {
    getElement(id).innerText = cont;
  }

  function renderTasks() {
    const projects = document.querySelectorAll('#p-titles h3');
    projects.forEach(project => {
      const content = ` <div class="py-2">
      <h3 class="text-primary text-center">${project.innerText} tasks</h3>
      <span class="col-6 m-auto d-flex justify-content-around"> <button class="btn btn-outline-primary new-t">new task <i
            class="fas fa-arrow-circle-down    "></i> </button> <button class="btn btn-outline-danger"> detete project
          <i class="fas fa-recycle    "></i></button></span>
    </div>`;
      project.addEventListener('click', () => { getElement('#p-tasks').innerHTML = content; });
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
    getId,
    render,
    hide,
    show,
    renderProject,
    renderModal,
  };
}());

export default dom;