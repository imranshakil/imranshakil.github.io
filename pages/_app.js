import Head from "next/head";
import "../public/css/style.css";
import "../public/vendor/aos/aos.css";
import "../public/vendor/bootstrap/css/bootstrap.min.css";
import "../public/vendor/bootstrap-icons/bootstrap-icons.css";
import "../public/vendor/boxicons/css/boxicons.min.css";
import "../public/vendor/glightbox/css/glightbox.min.css";
import "../public/vendor/swiper/swiper-bundle.min.css";

// react scroll
import {animateScroll} from 'react-scroll';
import Script from "next/script";

function MyApp({Component, pageProps}) {

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

                <title>Imran Hossain - Web Profile & Portfolio</title>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/>
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                    rel="stylesheet"/>
            </Head>

            {/* Google Tag Manager Script */}
            <Script
                id="gtm"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PFJ8LJ5G');
          `,
                }}
            />

            {/* NoScript Fallback for GTM */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-PFJ8LJ5G"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>


            <i className="bi bi-list mobile-nav-toggle d-xl-none"/>

            <div className="page-wraper">
                <Component {...pageProps} />
            </div>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"/>
            </a>

            <script src="vendor/purecounter/purecounter_vanilla.js"/>
            <script src="vendor/aos/aos.js"/>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"/>
            <script src="vendor/glightbox/js/glightbox.min.js"/>
            <script src="vendor/isotope-layout/isotope.pkgd.min.js"/>
            <script src="vendor/swiper/swiper-bundle.min.js"/>
            <script src="vendor/typed.js/typed.min.js"/>
            <script src="vendor/waypoints/noframework.waypoints.js"/>
            <script src="vendor/php-email-form/validate.js"/>

            <script src="js/main.js"/>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-4D28NW8V1E"/>
        </>
    );
}

export default MyApp;