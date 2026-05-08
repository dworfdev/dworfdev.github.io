function openProject(id) {
  document.getElementById('projects-main').style.display = 'none';
  document.getElementById('page-' + id).classList.add('active');
  document.getElementById('projects-block').scrollIntoView({ behavior: 'smooth' });
}

function closeProject() {
  document.querySelectorAll('.project-page').forEach(p => p.classList.remove('active'));
  document.getElementById('projects-main').style.display = 'block';
}
