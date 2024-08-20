// Example: Dynamically create elements for projects
const projectsSection = document.getElementById('projects');

const projectsData = [
  { title: 'Iconoclasta', type: 'Audiovisual', year: 2022 },
  // ... other projects
];

projectsData.forEach(project => {
  const projectDiv = document.createElement('div');
  projectDiv.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.type}, ${project.year}</p>
  `;
  projectsSection.appendChild(projectDiv);
});
