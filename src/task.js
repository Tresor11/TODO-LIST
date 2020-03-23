import dom from './dom';
import {
  project, createProject, myTask, deleteProject, findProject,
} from './project';

function task(taskTitle, taskId, taskDescription, taskPriority, taksDate) {
  const title = taskTitle;
  const id = taskId;
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
  // const date = dom.getElement('#date').value;
  const currentProject = findProject('testing');
  const newTask = task(title, description, priority, "2020-12-10");
  currentProject.addTask(newTask);
  console.log(currentProject);
}

export { task, newTask };