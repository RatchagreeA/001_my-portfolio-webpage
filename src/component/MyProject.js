function MyProject({ Info, uuid }) {
    return (
        <div className="projects-grid">
            {Info.map((ele) => (
                <a
                    href={ele.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project"
                    key={uuid()}
                >
                    <img
                        className="project-image"
                        src={ele.img}
                        alt="project"
                    />
                    <p className="project-title">
                        <span className="code">&lt;</span>
                        {ele.title}
                        <span className="code">&#47;&gt;</span>
                    </p>
                </a>
            ))}
        </div>
    );
}

export default MyProject;
