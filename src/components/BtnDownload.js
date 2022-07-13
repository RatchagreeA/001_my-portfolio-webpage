function BtnDownload({ Info }) {
    return (
        <a href={Info.link} className={Info.linkClass} download>
            <i className={Info.iconClass}></i>
            {` ${Info.title} `}
        </a>
    );
}

export default BtnDownload;
