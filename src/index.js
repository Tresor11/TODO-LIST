import { project, createProject, myTask,deleteProject } from './project';
import { task, newTask } from './task';
import dom from './dom';

dom.renderProject(myTask, 'p-titles');
const button = dom.getElement('#create-p');
const button2 = dom.getElement('#create-t');
const button3 = dom.getElement('#delete-p');
button.addEventListener('click', createProject);
button2.addEventListener('click', newTask);
button3.addEventListener('click', deleteProject);
dom.renderModal();
dom.hideModal();
