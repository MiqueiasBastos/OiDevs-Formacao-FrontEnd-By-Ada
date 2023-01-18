import "./styles.css";
import PropTypes from "prop-types";

const Button = ({ title, bgColor, color, onClick }) => {
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

Button.defaultProps = {
    bgColor: "#a13854",
    color: "#fff"
}

export default Button;
