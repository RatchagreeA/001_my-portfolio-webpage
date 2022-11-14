import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import myData from "./data/myData.json";
import InfoDetail from "./components/InfoDetail";
import ExpDetail from "./components/ExpDetail";
import MyProject from "./components/MyProject";
import BtnLink from "./components/BtnLink";
import ContactLink from "./components/ContactLink";
import BtnDownload from "./components/BtnDownload";

function App() {
    const URL_DATA = process.env.REACT_APP_API_DATA;
    const URL_IMG = process.env.REACT_APP_API_IMG;
    const [imgSrc, setImgSrc] = useState("");
    const [introInfo, setIntroInfo] = useState(myData.introInfo);
    const [resumeInfo, setResumeInfo] = useState(myData.resumeInfo);
    const [cvInfo, setCvInfo] = useState(myData.cvInfo);
    const [langSkillInfo, setLangSkillInfo] = useState(myData.langSkillInfo);
    const [personalInfo, setPersonalInfo] = useState(myData.personalInfo);
    const [proSkillInfo, setProSkillInfo] = useState(myData.proSkillInfo);
    const [eduInfo, setEduInfo] = useState(myData.eduInfo);
    const [workInfo, setWorkInfo] = useState(myData.workInfo);
    const [awardInfo, setAwardInfo] = useState(myData.awardInfo);
    const [projectInfo, setProjectInfo] = useState(myData.projectInfo);
    const [showAll, setShowAll] = useState(myData.showAll);
    const [contactInfo, setContactInfo] = useState(myData.contactInfo);

    const setState = (myData) => {
        setImgSrc(URL_IMG);
        setIntroInfo(myData.introInfo);
        setResumeInfo(myData.resumeInfo);
        setCvInfo(myData.cvInfo);
        setLangSkillInfo(myData.langSkillInfo);
        setPersonalInfo(myData.personalInfo);
        setProSkillInfo(myData.proSkillInfo);
        setEduInfo(myData.eduInfo);
        setWorkInfo(myData.workInfo);
        setAwardInfo(myData.awardInfo);
        setProjectInfo(myData.projectInfo);
        setShowAll(myData.showAll);
        setContactInfo(myData.contactInfo);
    };
    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setState(data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData(URL_DATA);
    }, []);

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
                    <img src={imgSrc} alt="profile-img" />
                </div>
                <div className="intro-container">
                    <div className="intro-txt">
                        <h1>{introInfo.h1}</h1>
                        <h4>{introInfo.h4}</h4>
                        <p>{introInfo.p}</p>
                    </div>
                    <div className="btn-container">
                        <BtnDownload Info={resumeInfo} key={uuidv4()} />
                        <BtnDownload Info={cvInfo} key={uuidv4()} />
                    </div>
                </div>
            </section>

            {/* <!-- END WELCOME SECTION --> */}

            {/* <!-- START ABOUT SECTION --> */}

            <section id="about">
                <div className="info-container">
                    <div className="info personal-info">
                        <h2>Personal information</h2>
                        <InfoDetail Info={personalInfo} uuid={uuidv4} />
                    </div>

                    <div className="info language-skill">
                        <h2>Language skills</h2>
                        <InfoDetail Info={langSkillInfo} uuid={uuidv4} />
                    </div>

                    <div className="info Programming-skill">
                        <h2>Computer skills</h2>
                        <InfoDetail Info={proSkillInfo} uuid={uuidv4} />
                    </div>
                </div>
            </section>

            {/* <!-- END ABOUT SECTION --> */}

            {/* <!-- END EXPERIENCE SECTION --> */}

            <section id="experience">
                <div className="exp-container">
                    <div className="exp">
                        <div className="exp-type">
                            <h2>
                                <i className="fa-solid fa-graduation-cap"></i>
                                Education
                            </h2>
                        </div>
                        <ExpDetail Info={eduInfo} uuid={uuidv4} />
                    </div>

                    <div className="exp">
                        <div className="exp-type">
                            <h2>
                                <i className="fa-solid fa-laptop-code"></i>
                                Work Experiences
                            </h2>
                        </div>
                        <ExpDetail Info={workInfo} uuid={uuidv4} />
                    </div>

                    <div className="exp">
                        <div className="exp-type">
                            <h2>
                                <i className="fa-solid fa-award"></i>
                                Awards & Achievements
                            </h2>
                        </div>
                        <ExpDetail Info={awardInfo} uuid={uuidv4} />
                    </div>
                </div>
            </section>

            {/* <!-- END EXPERIENCE SECTION --> */}

            {/* <!-- START PROJECTS SECTION --> */}

            <section id="projects" className="projects-section">
                <h2 className="projects-section-header">
                    These are some of my projects
                </h2>
                <MyProject Info={projectInfo} uuid={uuidv4} />
                <BtnLink Info={showAll} key={uuidv4()} />
            </section>

            {/* <!-- END PROJECTS SECTION --> */}

            {/* <!-- START CONTACT SECTION --> */}

            <section id="contact" className="contact-section">
                <div className="contact-section-header">
                    <h2>Let's work together...</h2>
                    <p>Contacts</p>
                </div>
                <ContactLink Info={contactInfo} uuid={uuidv4} />
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
