
function Sidebar() {
    return (
        <>
            <header id="header">
                <div class="d-flex flex-column">

                    <div class="profile">
                        <img src="img/profile-img.png" alt="Profile Picture"
                             class="img-fluid rounded-circle"/>
                        <h1 class="text-light"><a href="/">Imran Hossain</a></h1>
                        <h5 class="text-light"><a href="/">Full Stack Software Developer</a></h5>
                        <div class="social-links mt-3 text-center">
                            <a href="" class="home"><i class="bx bi-globe"/></a>
                            <a href="https://www.linkedin.com/in/imran-hossain-shakil/" class="linkedin"
                               target="_blank"><i class="bx bxl-linkedin"/></a>
                            <a href="https://github.com/imranshakil" class="github" target="_blank"><i
                                class="bx bxl-github"/></a>
                            <a href="https://www.facebook.com/imran.shakil.315/" class="facebook" target="_blank"><i
                                class="bx bxl-facebook"/></a>
                            <a href="https://api.whatsapp.com/send?phone=8801830521516" class="twitter" target="_blank"><i
                                class="bx bxl-whatsapp"/></a>

                        </div>
                    </div>

                    <nav id="navbar" class="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"/>
                                <span>Home</span></a>
                            </li>
                            <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"/> <span>About</span></a>
                            </li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"/>
                                <span>Portfolio</span></a></li>
                            <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"/>
                                <span>Resume</span></a>
                            </li>
                            <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"/>
                                <span>Services</span></a>
                            </li>
                            <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"/>
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