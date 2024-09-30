function Skills() {
    let technologies = {
        web: ["Python", "Django", "PHP", "Laravel", "Rest API", "Mysql", "React.js", "NextJS", "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "Ant Design", "Tailwind"],
        ios: ["iOS", "Xcode", "Swift", "SwiftUI", "CoreData", "Core Animation", "JSON", "Alamofire", "API"],
        android: ["Android", "Android Studio", "Java", "XML", "Retrofit", "JSON", "SQLite", "API"],
        electronics: ["EasyEDA", "Proteus", "Microcontroller", "PCB", "Matlab", "VHDL"],
        iot: ["Raspberry PI", "ESP32", "ESP8266", "ESP32CAM", "Arduino", "Jetson Nano", "PCB Design", "Python", "C++"],
        others: ["AWS", "GoDaddy", "cPanels", "Sketch", "Draw.io", "Figma", "Keynote", "Postman"]
    }
    const web = technologies.web.map((name, index) => {
        return <span className="badge text-bg-secondary mr-6px mb-1" key={index}>{name}</span>
    })
    const ios = technologies.ios.map((name, index) => {
        return <span className="badge text-bg-secondary mr-6px mb-1" key={index}>{name}</span>
    })
    const android = technologies.android.map((name, index) => {
        return <span className="badge text-bg-secondary mr-6px mb-1" key={index}>{name}</span>
    })
    const electronics = technologies.electronics.map((name, index) => {
        return <span className="badge text-bg-secondary mr-6px mb-1" key={index}>{name}</span>
    })
    const iot = technologies.iot.map((name, index) => {
        return <span className="badge text-bg-secondary mr-6px mb-1" key={index}>{name}</span>
    })
    const others = technologies.others.map((name, index) => {
        return <span className="badge text-bg-secondary mr-6px mb-1" key={index}>{name}</span>
    })
    return (

        <>
            <section id="skills" className="skills section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>
                            I hold immense respect and gratitude towards the ingenious tech creators, scientists, and
                            engineers who generously provide free content on the internet. Their efforts in solving
                            engineering problems and opening up opportunities have helped me to continually shape myself
                            and enhance my cognitive ability. By utilizing these tools, I have been able to create and
                            improve various systems that aid people and contribute towards the betterment.
                        </p>
                    </div>

                    <div className="row skills-content">
                        <div className="col-lg-4 col-md-4 col-sm-12 pb-4" data-aos="fade-up">
                            <div className="card min-h-176 bg-gray">
                                <div className="card-body">
                                    <h5 className="card-title"><b>Web Development</b></h5>
                                    <div className="mr-6px">{web}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 pb-4" data-aos="fade-up">
                            <div className="card min-h-176 bg-gray">
                                <div className="card-body">
                                    <h5 className="card-title"><b>iOS Development</b></h5>
                                    <div className="mr-6px">{ios}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 pb-4" data-aos="fade-up">
                            <div className="card min-h-176 bg-gray">
                                <div className="card-body">
                                    <h5 className="card-title"><b>Android Development</b></h5>
                                    <div className="mr-6px">{android}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 pb-4" data-aos="fade-up">
                            <div className="card min-h-176 bg-gray">
                                <div className="card-body">
                                    <h5 className="card-title"><b>Electronics</b></h5>
                                    <div className="mr-6px">{electronics}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 pb-4" data-aos="fade-up">
                            <div className="card min-h-176 bg-gray">
                                <div className="card-body">
                                    <h5 className="card-title"><b>IoT Development</b></h5>
                                    <div className="mr-6px">{iot}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 pb-4" data-aos="fade-up">
                            <div className="card min-h-176 bg-gray">
                                <div className="card-body">
                                    <h5 className="card-title"><b>Others</b></h5>
                                    <div className="mr-6px">{others}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;