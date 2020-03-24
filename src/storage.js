function storeProject(param) {
  const proj = JSON.stringify(param);
  window.localStorage.setItem('project', proj);
}

function currentP(params) {
  const currentP = JSON.stringify(params);
  window.localStorage.setItem('currentP', currentP);
  return (currentP);
}

function getCurrentP() {
  const currentP = localStorage.getItem('currentP');
  return JSON.parse(currentP);
}

function getProject() {
  const project = localStorage.getItem('project');
  return JSON.parse(project);
}

export {
  storeProject, getProject, currentP, getCurrentP,
};