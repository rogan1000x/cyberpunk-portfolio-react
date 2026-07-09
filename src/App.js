import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ProjectCard from './ProjectCard';

function App() {
  const [count, setCount] = useState(0);
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />

        <ProjectCard
          title="SEOUL-2077 HANGUL BREACH"
          description="한글 타이핑 게임"
          link="https://cyberfunk-hangle.netlify.app/"
        />

        <ProjectCard
          title="포트폴리오 사이트"
          description="사이버펑크 테마 포트폴리오"
          link="https://rogan-portfolio.netlify.app/"
        />

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
