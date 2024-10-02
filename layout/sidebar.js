
function Sidebar() {
    return (
        <>
            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src="img/profile-img.png" alt="Profile Picture"
                             className="img-fluid rounded-circle"/>
                        <h1 className="text-light"><a href="/">Imran Hossain</a></h1>
                        <span className="designation">Full Stack Software <br/> Developer</span>
                        <div className="social-links mt-3 text-center">
                            <a href="" className="home"><i className="bx bi-globe"/></a>
                            <a href="https://www.linkedin.com/in/imran-hossain-shakil/" className="linkedin"
                               target="_blank"><i className="bx bxl-linkedin"/></a>
                            <a href="https://github.com/imranshakil" className="github" target="_blank"><i
                                className="bx bxl-github"/></a>
                            <a href="https://www.facebook.com/imran.shakil.315/" className="facebook" target="_blank"><i
                                className="bx bxl-facebook"/></a>
                            <a href="https://api.whatsapp.com/send?phone=8801830521516" className="twitter" target="_blank"><i
                                className="bx bxl-whatsapp"/></a>

                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"/>
                                <span>About</span></a>
                            </li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"/>
                                <span>Portfolio</span></a>
                            </li>
                            <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-math"/>
                                <span>Skills & Strengths</span></a>
                            </li>
                            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"/>
                                <span>Resume</span></a>
                            </li>
                            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"/>
                                <span>Services</span></a>
                            </li>
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"/>
                                <span>Contact</span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Sidebar;