import ProjectCard from './ProjectCard';
import projects from './projects.json'; 

function Home() {
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