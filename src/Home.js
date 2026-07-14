import ProjectCard from './ProjectCard';

function Home() {
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
        }
    ];

    return (
        <div>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                />
            ))}
        </div>
    );
}

export default Home;