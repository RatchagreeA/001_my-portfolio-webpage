function InfoDetail({ Info, uuid }) {
    return (
        <div className="info-detail">
            {Info.map((ele) => (
                <p key={uuid()}>
                    {ele.topic && <strong>{`${ele.topic}: `}</strong>}
                    {ele.detail}
                </p>
            ))}
        </div>
    );
}

export default InfoDetail;
