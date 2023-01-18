import "./styles.css";

const Button = ({ title, bgColor = "#a13854", color = "#fff", onClick }) => {
    return (
        <button
            className="btn-default"
            style={{ backgroundColor: bgColor, color }}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default Button;
