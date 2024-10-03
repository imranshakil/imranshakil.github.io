import React from 'react';

function Contact() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            subject: event.target.subject.value,
            message: event.target.message.value,
        };

        console.log("data1", data)

        try {
            const response = await fetch('../forms/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log("result", result);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>
                        Feel comfortable to reach me anytime from anywhere, I'm always here to listen to you, join
                        with you and build something great together.
                    </p>
                </div>

                <div className="row" data-aos="fade-in">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"/>
                                <h4>Location:</h4>
                                <p>Lalmatia, Dhaka, Bangladesh.</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope"/>
                                <h4>Email:</h4>
                                <p>imranhshakil69@gmail.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone"/>
                                <h4>Call:</h4>
                                <p>+880 1711261000, +880 1830521516</p>
                            </div>
                            <iframe className="map-frame"
                                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Lalmatia&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="Google Map"/>
                        </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form onSubmit={handleSubmit} method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" name="message" id="message" rows="10" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
