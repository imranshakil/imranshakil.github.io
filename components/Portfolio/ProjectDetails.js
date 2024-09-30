import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ProjectDetails({project}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a onClick={handleShow} title="Project Details Preview"><i className="bi bi-eye"/></a>
            <a href={project.project_link} title="Project Link" target="_blank"><i className="bx bx-link"/></a>

            <Modal show={show} onHide={handleClose} scrollable>
                <Modal.Header>
                    <Modal.Title>{project.platform} Application</Modal.Title>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={handleClose}
                            aria-label="Close"/>
                </Modal.Header>
                <Modal.Body>
                    <div className="card scrollable">
                        <img src={project.cover_img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title"><b>{project.name}</b></h4>
                            <p className="card-text">{project.short_intro}</p>
                            <h4 className="card-title"><b>Tech Stack</b></h4>
                            {project.tech_stack.map((tech) => (
                                <span className="badge text-bg-secondary mr-6px">{tech}</span>
                            ))}
                            <div className="row mt-3">
                                <div className="col-6">
                                    <span><b>Duration: </b> {project.duration}</span>
                                </div>
                                <div className="col-6">
                                    <span><b>Role:</b> {project.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        <a href={project.project_link} className="text-white text-decoration-none" target="_blank">
                            More Explore
                        </a>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProjectDetails;
