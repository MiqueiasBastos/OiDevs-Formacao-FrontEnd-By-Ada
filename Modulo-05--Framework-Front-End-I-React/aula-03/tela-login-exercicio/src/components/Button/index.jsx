import "./styles.css";
import PropTypes from "prop-types";

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
};

Button.propTypes = {
    title: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
