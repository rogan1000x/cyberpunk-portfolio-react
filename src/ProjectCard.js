function ProjectCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link}>보러가기</a>
    </div>
  );
}

export default ProjectCard;