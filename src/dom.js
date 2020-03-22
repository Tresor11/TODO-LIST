/* eslint-disable func-names */
// eslint-disable-next-line func-names
// eslint-disable-next-line no-unused-vars
const dom = (function () {
  function getElement(property) {
    return document.querySelector(property);
  }

  function getId(id) {
    const intId = getElement(id).id;
    // eslint-disable-next-line radix
    return parseInt(intId);
  }

  function render(id, cont) {
    getElement(id).innerText = cont;
  }

  function renderListener() {
    const projects = document.querySelectorAll('#p-titles h3');
    projects.forEach(project => {
      project.addEventListener('click', () => { alert(project.innerText); });
    });
  }

  function renderProject(arr, id) {
    let content = '';
    arr.forEach(element => {
      content += `<h3 class="project ml-2 py-2 text-center">${element.title}</h3>`;
    });
    document.getElementById(id).innerHTML = content;
    renderListener();
  }

  function hide(id) {
    getElement(id).style.display = 'none';
  }

  function show(id) {
    getElement(id).style.display = 'block';
  }

  return {
    getElement,
    getId,
    render,
    hide,
    show,
    renderProject,
  };
}());

export default dom;