function ExpDetail({ Info, uuid }) {
    return (
        <div className="detail-container">
            {Info.map((ele) => (
                <div className="detail" key={uuid()}>
                    <h3>{ele.topic}</h3>
                    <p>{ele.detail}</p>
                    <ul className="detail-list">
                        {ele.list.map((ele) => (
                            <li key={uuid()}>{ele}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default ExpDetail;
