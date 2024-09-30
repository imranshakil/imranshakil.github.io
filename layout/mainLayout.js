import Sidebar from "./sidebar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Contact from "../components/Contact";
import SidebarFooter from "./sidebarFooter";

const MainLayout = () => {
    return (
        <>
            <Sidebar/>
            <Hero/>
            <main id="main">
                <About/>
                {/*<Facts/>*/}
                <Skills/>
                <Portfolio/>
                <Resume/>
                <Services/>
                {/*<Testimonials/>*/}
                <Contact/>
            </main>
            <SidebarFooter/>
        </>
    )
}

export default MainLayout;
