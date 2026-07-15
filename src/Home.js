import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

function Home() {
  const [projects, setProjects] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  const addTestProject = () => {
    const newProject = {
      title: "테스트 프로젝트",
      description: "POST 요청으로 추가된 프로젝트입니다",
      link: "#"
    };

    fetch('http://localhost:3001/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject)
    })
      .then(response => response.json())
      .then(data => setProjects(data.projects));
  };

  const deleteProject = (index) => {
    const isConfirmed = window.confirm('정말 이 프로젝트를 삭제하시겠습니까?');

    if (isConfirmed) {
      fetch(`http://localhost:3001/api/projects/${index}`, {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(data => setProjects(data.projects));
    }
  };

  const startEditing = (index, currentTitle) => {
    setEditingIndex(index);
    setEditTitle(currentTitle);
  };

  const saveEdit = (index) => {
    const updatedProject = {
      ...projects[index],
      title: editTitle
    };

    fetch(`http://localhost:3001/api/projects/${index}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProject)
    })
      .then(response => response.json())
      .then(data => {
        setProjects(data.projects);
        setEditingIndex(null);
      });
  };

  return (
    <div>
      <h3>Projects</h3>
      <button onClick={addTestProject}>테스트 프로젝트 추가</button>

      {projects.map((project, index) => (
        <div key={index}>
          {editingIndex === index ? (
            <div>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <button onClick={() => saveEdit(index)}>저장</button>
            </div>
          ) : (
            <div>
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
              />
              <button onClick={() => startEditing(index, project.title)}>수정</button>
              <button onClick={() => deleteProject(index)}>삭제</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;