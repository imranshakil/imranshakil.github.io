import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

const serviceId = "service_82w3e7n"; // Replace with your EmailJS service ID
const templateId = "template_z28at74"; // Replace with your EmailJS template ID
const publicKey = "sZXQkiUCi9RsiDdsG"; // Replace with your EmailJS public key

const Contact = () => {
    const recaptchaRef = useRef();

    // Load the reCAPTCHA script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        const recaptchaValue = grecaptcha.getResponse(); // Call without any parameter

        if (!recaptchaValue) {
            alert('Please complete the reCAPTCHA.');
            return;
        }

        const serviceId = "service_82w3e7n"; // Replace with your EmailJS service ID
        const templateId = "template_z28at74"; // Replace with your EmailJS template ID
        const publicKey = "sZXQkiUCi9RsiDdsG"; // Replace with your EmailJS public key

        // Create a new FormData object to gather form data
        const formData = new FormData(e.target);
        const templateParams = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            recaptcha: recaptchaValue // Include the reCAPTCHA value
        };

        console.log("templateParams", templateParams)

        // Send the email using EmailJS
        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                alert('Your message has been sent successfully!');
                e.target.reset(); // Reset form after successful submission
                grecaptcha.reset(recaptchaRef.current); // Reset reCAPTCHA after successful submission
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert('An error occurred while sending your message. Please try again later.');
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
                                <i className="bi bi-geo-alt" />
                                <h4>Location:</h4>
                                <p>Lalmatia, Dhaka, Bangladesh.</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope" />
                                <h4>Email:</h4>
                                <p>imranhshakil69@gmail.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone" />
                                <h4>Call:</h4>
                                <p>+880 1711261000, +880 1830521516</p>
                            </div>
                            <iframe className="map-frame"
                                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Lalmatia&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="Google Map" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form onSubmit={sendEmail} method="post" role="form" className="php-email-form">
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
                            <div className="g-recaptcha" ref={recaptchaRef} data-sitekey="6Lcj-FYqAAAAAIZSNdk5Rnjk811w95ElSdy39NWE"></div>
                            <div className="text-center mt-3">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
