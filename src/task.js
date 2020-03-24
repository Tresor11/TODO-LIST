import dom from './dom';
import {
  project, createProject, myTask, deleteProject, findProject, addTask,
} from './project';
import { storeProject, getProject } from './storage';

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
  dom.hide();
  storeProject(myTask);
  dom.renderTasks();
}
window.deleteTask = function(id) {
  const task = findTask(id);
  const proj = findProject(dom.getExt());
  proj.tasks.splice(proj.tasks.indexOf(task), 1);
  storeProject(myTask);
  location.reload(true);
}

window.editTask=function(id){
  
}
export {
  task, newTask, findTask,
};