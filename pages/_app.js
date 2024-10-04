import Head from "next/head";
import "../public/css/style.css";
import "../public/vendor/aos/aos.css";
import "../public/vendor/bootstrap/css/bootstrap.min.css";
import "../public/vendor/bootstrap-icons/bootstrap-icons.css";
import "../public/vendor/boxicons/css/boxicons.min.css";
import "../public/vendor/glightbox/css/glightbox.min.css";
import "../public/vendor/swiper/swiper-bundle.min.css";
import { useEffect } from 'react';

// react scroll
import {animateScroll} from 'react-scroll';
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Load Google Analytics script
        const handleGA = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-10FTJNY0JZ');
        };

        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-10FTJNY0JZ';
        script.async = true;
        script.onload = handleGA;
        document.head.appendChild(script);
    }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <title>Imran Hossain - Web Profile & Portfolio</title>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                    rel="stylesheet"
                />
            </Head>

            <i className="bi bi-list mobile-nav-toggle d-xl-none" />

            <div className="page-wrapper">
                <Component {...pageProps} />
            </div>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short" />
            </a>

            <script src="vendor/purecounter/purecounter_vanilla.js" />
            <script src="vendor/aos/aos.js" />
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js" />
            <script src="vendor/glightbox/js/glightbox.min.js" />
            <script src="vendor/isotope-layout/isotope.pkgd.min.js" />
            <script src="vendor/swiper/swiper-bundle.min.js" />
            <script src="vendor/typed.js/typed.min.js" />
            <script src="vendor/waypoints/noframework.waypoints.js" />
            <script src="vendor/php-email-form/validate.js" />
            <script src="js/main.js" />
        </>
    );
}

export default MyApp;