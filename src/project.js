function project(projectTitle, PorjectId) {
  const title = projectTitle;
  const id = PorjectId;
  const tasks = [];
  const addTask = (task) => {
    task.id = tasks.length;
    tasks.push(task);
  };
  return {
    title, id, tasks, addTask,
  };
}
export {project};