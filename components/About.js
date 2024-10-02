import React, {useState} from "react";

function About() {
    const birthdate = new Date('11/11/1996');
    const now = new Date();
    let years = now.getFullYear() - birthdate.getFullYear();
    let months = now.getMonth() - birthdate.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }

    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p className="py-1">
                            My name is <b>Imran</b> Hossain, a self-taught Full-Stack Software Developer from Bangladesh. My
                            journey into programming began in mid-2016 when I became fascinated by modern technology,
                            particularly software development. I started my career as a beginner at Creative IT Soft
                            (CIS), and since then, I have been continuously learning and growing in the field.
                        </p>

                        <p className="py-1">
                            Despite my professional background, I completed my bachelor's in Electrical & Electronics
                            Engineering <b>(EEE)</b> in 2022 from United International University <b>(UIU)</b>. My
                            interest with electrical
                            engineering started at childhood age when I would play with household electronics and tinker
                            with toys and devices. One day, I opened a charger light that ran on both AC and DC power,
                            and while examining the green musking circuit, I received an electric shock. This experience
                            left me intrigued about how the small circuit could cause such a painful shock, and I began
                            asking questions to my neighbors about how these circuits work and where they are made. My
                            neighbors couldn't give an explanation. Nevertheless, this question remained in my mind, and
                            before choosing my academic path, it helped me a lot to decide to pursue Electrical
                            Engineering.

                        </p>
                        <p className="py-1">
                            I believe that, diverse experiences have shaped me into a well-rounded individual with a
                            passion for both software development and electrical engineering. I am <b>excited to
                            continue </b>
                            my
                            journey
                            of growth and learning, and I am <b>grateful</b> for the opportunities that have come my
                            way.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="img/profile-img.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Full Stack Software Developer</h3>
                            <p className="fst-italic">
                                As a Full-Stack Software Developer with a Bachelor's in Electrical & Electronics
                                Engineering. And, diverse experiences have shaped me into a well-rounded individual with
                                a passion for growth and learning.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"/> <strong>Education:</strong>
                                            <span>B.Sc in EEE</span>
                                        </li>
                                        <li><i className="bi bi-chevron-right"/> <strong>Date of Birth:</strong>
                                            <span>November 1996</span>
                                        </li>
                                        <li><i className="bi bi-chevron-right"/> <strong>Blood Group:</strong>
                                            <span>A-</span>
                                        </li>
                                        <li><i className="bi bi-chevron-right"/> <strong>Phone:</strong>
                                            <span>+880 1830 521516</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"/> <strong>Freelance:</strong>
                                            <span>Available</span>
                                        </li>
                                        <li><i className="bi bi-chevron-right"/> <strong>Email:</strong>
                                            <span>imranshakil77@gmail.com</span>
                                        </li>
                                        <li><i className="bi bi-chevron-right"/> <strong>Address:</strong>
                                            <span>Dhaka, Bangladesh.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Working in the tech industry, my moral compass is to use energy wisely and efficiently.
                                I strive to approach every aspect of my work thoughtfully, considering each bit, byte,
                                and logic carefully. This inner cognitive process guides me in creating innovative
                                solutions while being mindful of our impact on the environment and society.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About;