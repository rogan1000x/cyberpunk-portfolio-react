import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ProjectCard from './ProjectCard';

function App() {
  const [count, setCount] = useState(0);
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  useEffect(() => {
    document.title = `클릭 ${count}번`;
  }, [count]);

  const projects = [
    {
      title: "SEOUL-2077 HANGUL BREACH",
      description: "한글 타이핑 게임",
      link: "https://cyberfunk-hangle.netlify.app/"
    },
    {
      title: "포트폴리오 사이트",
      description: "사이버펑크 테마 포트폴리오",
      link: "https://rogan-portfolio.netlify.app/"
    },
    {
      title: "React 포트폴리오 (진행중)",
      description: "지금 만들고 있는 이 사이트!",
      link: "#"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}

        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <p>클릭 횟수: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          클릭해보세요!
        </button>

        {count === 0 && <p>아직 안 눌렀네요!</p>}
        {count > 0 && count < 5 && <p>좋아요! 계속 눌러보세요</p>}
        {count >= 5 && <p>🔥 대단해요! {count}번이나 눌렀어요!</p>}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
