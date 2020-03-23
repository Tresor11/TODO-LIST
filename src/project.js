import dom from './dom';
import { storeProject, getProject } from './storage';

let myTask = [];

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
  if (myTask.every(el => el.title !== newProject.title)) {
    myTask.push(newProject);
    storeProject(myTask);
    console.log(localStorage);
    dom.renderProject(getProject(), 'p-titles');
    return true;
  }
  return false;
}

const deleteProject = (title) => {
  myTask.forEach(element => {
    if (element.title === title) {
      myTask.splice(myTask.indexOf(element), 1);
    }
  });
};

(function () {
  if (getProject()) {
    myTask = getProject();
  } else {
    const test = project('general', 1);
    myTask.push(test);
  }
}());

const findProject = (title) => {
  let project;
  myTask.forEach(element => {
    if (element.title === title) {
      project = element;
    }
  });
  return project;
};
export {
  project, createProject, myTask, deleteProject, findProject, addTask
};