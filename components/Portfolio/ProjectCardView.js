import ProjectDetails from "./ProjectDetails";
import portfolio from "../../public/data/portfolio.json";

const ProjectCardView = ({ project }) => {
    return (
        <>
            <div className="row portfolio-container">
                {portfolio.portfolio.map((project) => (
                    <div className={`col-lg-4 col-md-6 portfolio-item ${project.platform}`}>
                        <div className="portfolio-wrap">
                            <img className="card-img-top" src={project.cover_img} alt="Card image"/>
                            <div className="portfolio-links">
                                <ProjectDetails project={project} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProjectCardView;
