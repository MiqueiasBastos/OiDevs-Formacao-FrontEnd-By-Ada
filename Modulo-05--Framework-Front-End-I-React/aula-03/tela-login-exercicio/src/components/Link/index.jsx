import "./styles.css";

const Link = ({ text, url }) => {
    return (
        <a className="link" href={url}>
            {text}
        </a>
    );
}

export default Link;
