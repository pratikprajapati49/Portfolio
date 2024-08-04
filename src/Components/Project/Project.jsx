import styles from './Project.module.css';
import Car from '../../assets/Car.jpeg';
import Tour from '../../assets/Tour.jpeg';
import Course from '../../assets/Course.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Car}
          link="https://github.com/pratikprajapati49/Car-Rental-System"
          h3="Car"
          p="Rental System"
        />
        <ProjectCard
          src={Tour}
          link="https://github.com/pratikprajapati49/Tour_Cards"
          h3="Tour"
          p="Package Card"
        />
        <ProjectCard
          src={Course}
          link="https://github.com/pratikprajapati49/Online_course"
          h3="Online"
          p="Courses Cards"
        />
      </div>
    </section>
  );
}

export default Projects;