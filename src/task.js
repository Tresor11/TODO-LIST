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
function deleteTask() {
  // const deltask = 
}
export { task, newTask, deleteTask};