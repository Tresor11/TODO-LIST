import { task, newTask } from './task';
import { project, createProject, myTask } from './project';
import dom from './dom';

dom.renderProject(myTask, 'p-titles');
const button = dom.getElement('#create-p');
button.addEventListener('click', createProject);
