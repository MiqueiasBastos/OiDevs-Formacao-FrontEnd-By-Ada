import "./styles.css";
import PropTypes from "prop-types";

const Input = ({ label, hideContent }) => {
    return (
        <>
            <label className="label-input-default">{label}</label>
            <input
                className="input-default"
                type={hideContent ? "password" : "text"}
            />
        </>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    hideContent: PropTypes.bool,
};

export default Input;
