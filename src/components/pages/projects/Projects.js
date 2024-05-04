import '../../../App';
import './Projects.css';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';

function Projects() {
  
    return (
      <>
        <div className= 'projects-background'>
          <Project1/>
          <Project2/>
          <Project3/>
          <Project4/>
        </div>
      </>
    );
  }
  
  export default Projects;