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
function newTask(project, task) {
  task.id = project.tasks.length;
  project.addTask(task);
}

export { task, newTask };