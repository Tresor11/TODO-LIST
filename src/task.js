import dom from './dom';
import {
  project, createProject, myTask, deleteProject, findProject, addTask,
} from './project';
import {
  storeProject, getProject, currentP, getCurrentP,
} from './storage';
import { createForm } from './modals';

function task(taskTitle, taskDescription, taskPriority, taksDate) {
  const title = taskTitle;
  const id = 0;
  const description = taskDescription;
  const priority = taskPriority;
  const date = taksDate;
  return {
    title, id, description, priority, date,
  };
}

function findTask(id) {
  let task;
  const proj = findProject(dom.getExt());
  proj.tasks.forEach(element => {
    if (element.id === id) {
      task = element;
    }
  });
  return task;
}

function newTask() {
  const title = dom.getElement('#title').value;
  const description = dom.getElement('#description').value;
  const priority = dom.getElement('#priority').value;
  const date = dom.getElement('#date').value;
  const currentProject = findProject(dom.getExt());
  const newTask = task(title, description, priority, date);
  addTask(currentProject, newTask);
  storeProject(myTask);
  currentP(currentProject);
  console.log('created');
  dom.hide();
}
window.deleteTask = function (id) {
  const task = findTask(id);
  const proj = findProject(dom.getExt());
  proj.tasks.splice(proj.tasks.indexOf(task), 1);
  storeProject(myTask);
  currentP(proj);
  location.reload(true);
};

window.editTask = function (id) {
  dom.getElement('#task-modal').innerHTML = createForm(id);
  dom.show();
};

window.update = function (id) {
  const currentTask = findTask(id);
  const proj = findProject(dom.getExt());

  const title = dom.getElement('#title').value;
  const description = dom.getElement('#description').value;
  const priority = dom.getElement('#priority').value;
  const date = dom.getElement('#date').value;
  const newTask = task(title, description, priority, date);
  newTask.id = currentTask.id;
  proj.tasks.splice(proj.tasks.indexOf(currentTask), 1, newTask);
  storeProject(myTask);
  currentP(proj);
  location.reload(true);
};


window.cancel = function () {
  location.reload(true);
};

export {
  task, newTask, findTask,
};