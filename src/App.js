import "./App.scss";
import InfoDetail from "./component/InfoDetail";
const langSkillInfo = [
    {
        topic: "Thai",
        detail: "Native speak, read and write",
    },
    {
        topic: "English",
        detail: "Intermediate speak, read and write",
    },
    {
        topic: "Japanese",
        detail: "Japanese-Language Proficiency Test Level N3",
    },
];
const personalInfo = [
    {
        topic: "Name",
        detail: "Ratchagree Amornlikitsin",
    },
    {
        topic: "Date of birth",
        detail: "12 March 1997",
    },
    {
        topic: "Email",
        detail: "ratchagree@gmail.com",
    },
];
const proSkillInfo = [
    {
        topic: "",
        detail: "HTML5, CSS3, JavaScript",
    },
    {
        topic: "",
        detail: "React",
    },
    {
        topic: "",
        detail: "Python",
    },
    {
        topic: "",
        detail: "Java",
    },
    {
        topic: "",
        detail: "C",
    },
    {
        topic: "",
        detail: "VBA Excel",
    },
    {
        topic: "",
        detail: "MATLAB (m-script)",
    },
    {
        topic: "",
        detail: "Simulink, Stateflow",
    },
];
function App() {
    return (
        <div className="container">
            {/* <!-- START NAV SECTION --> */}

            <nav id="navbar" className="nav">
                <a href="#welcome-section" className="logo">
                    <i className="fa-solid fa-house"></i>
                </a>
                <ul className="nav-list">
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#experience">EXPERIENCE</a>
                    </li>
                    <li>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACTS</a>
                    </li>
                </ul>
            </nav>

            {/* <!-- END NAV SECTION --> */}

            {/* <!-- START WELCOME SECTION --> */}

            <section id="welcome-section" className="welcome">
                <div className="pro-img">
                    <img
                        src="https://cdn.pixabay.com/photo/2022/01/31/12/46/bird-6983434_960_720.jpg"
                        alt="profile-img"
                    />
                </div>
                <div className="intro-txt">
                    <h1>Hi, I am Ratchagree</h1>
                    <p>a software engineer</p>
                </div>
            </section>

            {/* <!-- END WELCOME SECTION --> */}

            {/* <!-- START ABOUT SECTION --> */}

            <section id="about">
                <div className="info-container">
                    <div className="info personal-info">
                        <h2>Personal information</h2>
                        <InfoDetail Info={personalInfo} />
                    </div>

                    <div className="info language-skill">
                        <h2>Language skills</h2>
                        <InfoDetail Info={langSkillInfo} />
                    </div>

                    <div className="info Programming-skill">
                        <h2>Programming skills</h2>
                        <InfoDetail Info={proSkillInfo} />
                    </div>
                </div>
            </section>

            {/* <!-- END ABOUT SECTION --> */}

            {/* <!-- END EXPERIENCE SECTION --> */}

            <section id="experience">
                <div className="exp-container">
                    <div className="exp">
                        <div className="exp-class">
                            <h2>
                                <i className="fa-solid fa-graduation-cap"></i>
                                Education
                            </h2>
                        </div>
                        <div className="detail-container">
                            <div className="detail">
                                <h3>Thammasat University</h3>
                                <p>
                                    Bachelor’s Degree in Electrical Engineering
                                    (2015 – 2019)
                                </p>
                            </div>
                            <div className="detail">
                                <h3>Rittiyawannalai School, Bangkok</h3>
                                <p>
                                    Certificate of General Education (2009 –
                                    2015)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="exp">
                        <div className="exp-class">
                            <h2>
                                <i className="fa-solid fa-laptop-code"></i>
                                Work Experiences
                            </h2>
                        </div>
                        <div className="detail-container">
                            <div className="detail">
                                <h3 className="position">Software Engineer</h3>
                                <p className="company">
                                    Toyota Tsusho Denso Electronics Thailand
                                    Co., Ltd (2019 - Present)
                                </p>
                                <ul className="detail-list">
                                    <li>
                                        Development and Testing on ECU software
                                        (Embedded) by using MATLAB, Simulink and
                                        C language
                                    </li>
                                    <li>
                                        Create test pattern for software testing
                                        to confirm functional of software work
                                        product
                                    </li>
                                    <li>
                                        Develop tool for support automate task
                                        by using M-script and VBA Excel
                                    </li>
                                    <li>
                                        Organize collaboration activity with the
                                        university to promote the company
                                    </li>
                                </ul>
                            </div>

                            <div className="detail">
                                <h3 className="position">Trainee</h3>
                                <p className="company">
                                    Shinetsu Works Co., Ltd. (2018 : Jun – Aug)
                                </p>
                                <ul className="detail-list">
                                    <li>
                                        Participate industrial Internship
                                        Program in Japan
                                    </li>
                                    <li>Operate product assembly line</li>
                                    <li>Products testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- END EXPERIENCE SECTION --> */}

            {/* <!-- START PROJECTS SECTION --> */}

            <section id="projects" className="projects-section">
                <h2 className="projects-section-header">
                    These are some of my projects
                </h2>
                <div className="projects-grid">
                    <a
                        href="https://codepen.io/ratchagreea/pen/zYpQZmB"
                        target="_blank"
                        rel="noreferrer"
                        className="project"
                    >
                        <img
                            className="project-image"
                            src="https://codepen.io/ratchagreea/pen/zYpQZmB/image/small.png"
                            alt="project"
                        />
                        <p className="project-title">
                            <span className="code">&lt;</span>
                            Product Landing Page
                            <span className="code">&#47;&gt;</span>
                        </p>
                    </a>

                    <a
                        href="https://codepen.io/ratchagreea/pen/WNdmKYa"
                        target="_blank"
                        rel="noreferrer"
                        className="project"
                    >
                        <img
                            className="project-image"
                            src="https://codepen.io/ratchagreea/pen/WNdmKYa/image/small.png"
                            alt="project"
                        />
                        <p className="project-title">
                            <span className="code">&lt;</span>
                            Survey Form
                            <span className="code">&#47;&gt;</span>
                        </p>
                    </a>

                    <a
                        href="https://codepen.io/ratchagreea/pen/XWVoWrb"
                        target="_blank"
                        rel="noreferrer"
                        className="project"
                    >
                        <img
                            className="project-image"
                            src="https://codepen.io/ratchagreea/pen/XWVoWrb/image/small.png"
                            alt="project"
                        />
                        <p className="project-title">
                            <span className="code">&lt;</span>
                            Tribute Page
                            <span className="code">&#47;&gt;</span>
                        </p>
                    </a>

                    <a
                        href="https://codepen.io/ratchagreea/pen/qBxWypY"
                        target="_blank"
                        rel="noreferrer"
                        className="project"
                    >
                        <img
                            className="project-image"
                            src="https://codepen.io/ratchagreea/pen/qBxWypY/image/small.png"
                            alt="project"
                        />
                        <p className="project-title">
                            <span className="code">&lt;</span>
                            Technical Documentation Page
                            <span className="code">&#47;&gt;</span>
                        </p>
                    </a>
                </div>

                <a
                    href="https://codepen.io/ratchagreea"
                    className="btn-show-all"
                    target="_blank"
                    rel="noreferrer"
                >
                    Show all
                    <i className="fas fa-chevron-right"></i>
                </a>
            </section>

            {/* <!-- END PROJECTS SECTION --> */}

            {/* <!-- START CONTACT SECTION --> */}

            <section id="contact" className="contact-section">
                <div className="contact-section-header">
                    <h2>Let's work together...</h2>
                    <p>Contacts</p>
                </div>
                <div className="contact-links">
                    <a
                        href="https://facebook.com/example"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-details"
                    >
                        <i className="fab fa-facebook-square"></i> Facebook
                    </a>
                    <a
                        id="profile-link"
                        href="https://github.com/example"
                        target="_blank"
                        rel="noreferrer"
                        className="btn contact-details"
                    >
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a
                        href="https://twitter.com/example"
                        target="_blank"
                        rel="noreferrer"
                        className="btn contact-details"
                    >
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a
                        href="mailto:example@example.com"
                        className="btn contact-details"
                    >
                        <i className="fas fa-at"></i> Send a mail
                    </a>
                    <a href="tel:555-555-5555" className="btn contact-details">
                        <i className="fas fa-mobile-alt"></i> Call me
                    </a>
                </div>
                <div className="copy-txt">
                    <p>
                        Copyright 2022 by Ratchagree Amornlikitsin. All Rights
                        Reserved.
                    </p>
                </div>
            </section>

            {/* <!-- END CONTACT SECTION --> */}
        </div>
    );
}

export default App;
