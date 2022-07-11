function InfoDetail({ Info }) {
    return (
        <div className="info-detail">
            {Info.map((ele) => (
                <p>
                    {ele.topic && <strong>{`${ele.topic}: `}</strong>}
                    {ele.detail}
                </p>
            ))}
        </div>
    );
}

export default InfoDetail;
