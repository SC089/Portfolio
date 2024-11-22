import Project from '../components/Project';

const Portfolio = () => (
    <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="projects">
            {[...Array(6)].map((_, idx) => (
                <Project
                    key={idx}
                    title={`Project ${idx + 1}`}
                    appLink=
                    repoLink=
                />
            ))}
        </div>
    </section>
);

export default Portfolio;