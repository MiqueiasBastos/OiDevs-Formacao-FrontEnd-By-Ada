import "./styles.css";

function Link({ text, url }) {
    return (
        <a className="link" href={url}>
            {text}
        </a>
    );
}

export default Link;
