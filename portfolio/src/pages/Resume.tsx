import ResumePDF from '../assets/Resume.pdf';

const Resume: React.FC = () => (
    <section id="resume">
      <h2>Resume</h2>
      <a href={ResumePDF} download="Resume.pdf">
        Download Resume
      </a>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>HTML/CSS</li>
      </ul>
    </section>
  );
  
  export default Resume;
  