function storeProject(param) {
  const proj = JSON.stringify(param);
  window.localStorage.setItem('project', proj);
}

function getProject() {
  const project = localStorage.getItem('project');
  return JSON.parse(project);
}

export { storeProject, getProject };