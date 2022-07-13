import BtnLink from "./BtnLink";

function ContactLink({ Info, uuid }) {
    return (
        <div className="contact-links">
            {Info.map((ele) => (
                <BtnLink Info={ele} key={uuid()} />
            ))}
        </div>
    );
}

export default ContactLink;
