import dom from './dom';
import { storeProject, getProject } from './storage';
import {createForm} from './modals';

let myTask = [];


(function () {
  if (getProject()) {
    myTask = getProject();
  } else {
    const test = project('general', 1);
    myTask.push(test);
  }
}());

function project(projectTitle, PorjectId) {
  const title = projectTitle;
  const id = PorjectId;
  const tasks = [];
  return {
    title, id, tasks,
  };
}

const addTask = (project, task) => {
  task.id = project.tasks.length;
  project.tasks.push(task);
};

function createProject() {
  const title = dom.getElement('#project-title').value;
  const newProject = project(title, myTask.length);
  if (myTask.every(el => el.title !== newProject.title) && (title !== '')) {
    myTask.push(newProject);
    storeProject(myTask);
    dom.renderProject(getProject(), 'p-titles');
    return true;
  }
  return false;
}


const findProject = (title) => {
  let project;
  myTask.forEach(element => {
    if (element.title === title) {
      project = element;
    }
  });
  return project;
};

const deleteProject = () => {
  const proj = findProject(dom.getExt());
  myTask.splice(myTask.indexOf(proj), 1);
  storeProject(myTask);
  location.reload(true);
};
export {
  project, createProject, myTask, deleteProject, findProject, addTask,
};