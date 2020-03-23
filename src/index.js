import { project, createProject, myTask } from './project';
import { task, newTask } from './task';
import dom from './dom';

dom.renderProject(myTask, 'p-titles');
const button = dom.getElement('#create-p');
const button2 = dom.getElement('#create-t');
button.addEventListener('click', createProject);
button2.addEventListener('click', newTask);
dom.renderModal();
dom.hideModal();

