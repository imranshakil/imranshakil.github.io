import React, {useState, useEffect} from 'react';
import ProjectCardView from "./Portfolio/ProjectCardView";

function Portfolio() {
    return (
        <>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>
                            This portfolio showcases my expertise in developing web, iOS and Android applications, as
                            well as my experience in the Internet of Things (IoT) and electronics domains. With a focus
                            on user-centered design and agile development methodologies, I have worked on a variety of
                            projects. My proficiency in multiple programming languages and frameworks, combined with my
                            passion for creating innovative solutions, allows me to deliver high-quality products that
                            meet client expectations.
                        </p>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".Web">Web</li>
                                <li data-filter=".iOS">iOS</li>
                                <li data-filter=".Android">Android</li>
                                <li data-filter=".Electronics">Electronics</li>
                                <li data-filter=".IoT">IoT</li>
                                <li data-filter=".Others">Others</li>
                            </ul>
                        </div>
                    </div>

                    <ProjectCardView/>

                </div>
            </section>
        </>
    )
}

export default Portfolio;

