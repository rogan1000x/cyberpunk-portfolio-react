function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  return (
    <div>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;