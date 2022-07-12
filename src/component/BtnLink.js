function BtnLink({ Info }) {
    return (
        <a
            href={Info.link}
            className={Info.linkClass}
            target="_blank"
            rel="noreferrer"
        >
            <i className={Info.iconClass}></i>
            {` ${Info.title} `}
        </a>
    );
}

export default BtnLink;
