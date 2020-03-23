import dom from './dom';

const myTask = [];

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

function createProject() {
  const title = dom.getElement('#project-title').value;
  const newProject = project(title, myTask.length);
  if (myTask.every(el => el.title !== newProject.title)) {
    myTask.push(newProject);
    dom.renderProject(myTask, 'p-titles');
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

const findProject = (title) => {
  let project;
  myTask.forEach(element => {
    if (element.title === title) {
      project = element;
    }
  });
  return project;
};

const test = project('testing', 1);
const test2 = project('test', 1);
myTask.push(test);
myTask.push(test2);
export {
  project, createProject, myTask, deleteProject, findProject,
};