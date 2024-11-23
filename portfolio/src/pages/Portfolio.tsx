import Project from '../components/project';
import { projects } from '../assets/projects';

const Portfolio: React.FC = () => (
  <section id="portfolio">
    <h2>Portfolio</h2>
    <div className="projects">
      {projects.map((project, idx) => (
        <Project
          key={idx}
          title={project.title}
          repoLink={project.repoLink}
        />
      ))}
    </div>
  </section>
);

export default Portfolio;
