interface ProjectProps {
    title: string;
    repoLink: string; // Required property
  }
  
  const Project: React.FC<ProjectProps> = ({ title, repoLink }) => (
    <div className="project">
      <h3>{title}</h3>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
    </div>
  );
  
  export default Project;
  