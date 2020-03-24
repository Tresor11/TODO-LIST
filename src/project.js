/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
/* eslint-disable func-names */

import dom from './dom';
import {
  storeProject, getProject, currentP,
} from './storage';

let myTask = [];

function project(projectTitle, PorjectId) {
  const title = projectTitle;
  const id = PorjectId;
  const tasks = [];
  return {
    title, id, tasks,
  };
}

(function () {
  if (getProject()) {
    myTask = getProject();
  } else {
    const test = project('general', 1);
    currentP(test);
    myTask.push(test);
  }
}());

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
  if (proj.title === 'general') {
    dom.getElement('#message').innerText = "Can't delete general project";
    return false;
  }
  myTask.splice(myTask.indexOf(proj), 1);
  storeProject(myTask);
  currentP(findProject('general'));
  location.reload(true);
  return true;
};
export {
  project, createProject, myTask, deleteProject, findProject, addTask,
};