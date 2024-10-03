import React, {useState} from 'react';
import emailjs from 'emailjs-com';

const serviceIdVal = "service_82w3e7n"; // Replace with your EmailJS service ID
const templateIdVal = "template_z28at74"; // Replace with your EmailJS template ID
const publicKeyVal = "sZXQkiUCi9RsiDdsG"; // Replace with your EmailJS public key

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        const serviceId = serviceIdVal; // Replace with your EmailJS service ID
        const templateId = templateIdVal; // Replace with your EmailJS template ID
        const publicKey = publicKeyVal; // Replace with your EmailJS public key

        const formData = new FormData(e.target);
        const templateParams = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                setSuccessMessage("Your message has been sent successfully!");
                e.target.reset();
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                // Set a user-friendly error message based on the error response
                if (error.status === 412) {
                    setErrorMessage("Authentication failed: Insufficient authentication scopes.");
                } else {
                    setErrorMessage("An error occurred while sending your message. Please try again later.");
                }
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>
                        Feel comfortable to reach me anytime from anywhere, I'm always here to listen to you, join
                        with you, and build something great together.
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
                            <iframe
                                className="map-frame"
                                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Lalmatia&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                frameBorder="0"
                                allowFullScreen
                                title="Google Map"
                            />
                        </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form onSubmit={sendEmail} method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" name="message" id="message" rows="10"
                                          required></textarea>
                            </div>
                            <div className="my-3">
                                {errorMessage && <div className="error-message">{errorMessage}</div>}
                                {successMessage && <div className="sent-message">{successMessage}</div>}
                            </div>
                            <div className="text-center mt-3">
                                {/*<button type="submit" disabled={loading} className={`btn ${loading ? "loading" : ""}`}>*/}
                                {/*    {loading ? (*/}
                                {/*        <span>*/}
                                {/*            <i className="bi bi-arrow-repeat spinner"></i> Sending...*/}
                                {/*        </span>*/}
                                {/*    ) : (*/}
                                {/*        "Send Message"*/}
                                {/*    )}*/}
                                {/*</button>*/}

                                <div className="text-center mt-3">
                                    <button type="submit">{loading ? "Loading..." : "Send Message"}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
