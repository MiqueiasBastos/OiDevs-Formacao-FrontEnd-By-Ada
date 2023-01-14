import "./styles.css";
function Button({ title, bgColor = "#a13854", color = "#fff" }) {
    return (
        <button
            className="btn-default"
            style={{ backgroundColor: bgColor, color }}
        >
            {title}
        </button>
    );
}

export default Button;
