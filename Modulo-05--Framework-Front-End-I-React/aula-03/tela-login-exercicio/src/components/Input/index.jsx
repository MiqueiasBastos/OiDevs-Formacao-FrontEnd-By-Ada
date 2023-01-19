import "./styles.css";
import PropTypes from "prop-types";

const Input = ({ label, hideContent, value, onChange }) => {
    return (
        <>
            <label className="label-input-default">{label}</label>
            <input
                className="input-default"
                type={hideContent ? "password" : "text"}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    hideContent: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;
