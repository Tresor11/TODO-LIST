import { task, newTask } from './task';
import { project } from './project';
import dom from './dom';

const myTask = [{ title: 'testing', id: 1 }, { title: 'test', id: 2 }];
dom.renderProject(myTask, 'p-titles');
function createP() {
  const title = dom.getElement('#project-title').value;
  const newProject = project(title, myTask.length);
  myTask.push(newProject);
  dom.renderProject(myTask, 'p-titles');
}
const button = dom.getElement('#create-p');
button.addEventListener('click', createP);
// myTask.forEach(el => { dom.getElement('p-titles').innerHTML += `<h3 class="project ml-2 py-2 text-center">${el.title}</h3>`; });
