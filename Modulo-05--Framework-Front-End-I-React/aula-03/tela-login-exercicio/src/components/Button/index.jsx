import "./styles.css";
function Button({ title, bgColor = "#a13854", color = "#fff", url }) {
    return (
        <button
            className="btn-default"
            style={{ backgroundColor: bgColor, color }}
            onClick={()=>window.location.href = url}
        >
            {title}
        </button>
    );
}

export default Button;
