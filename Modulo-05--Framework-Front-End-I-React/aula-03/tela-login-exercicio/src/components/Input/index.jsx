import "./styles.css";
import PropTypes from "prop-types";

const Input = ({ label, hideContent, value, onChange, colorLabel }) => {
    return (
        <>
            <label className="label-input-default" style={{color: colorLabel}}>{label}</label>
            <input
                className="input-default"
                type={hideContent ? "password" : "text"}
                value={value}
                onChange={onChange}
                style={{borderColor: colorLabel}}
            />
        </>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    hideContent: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    colorLabel: PropTypes.string
};
Input.defaultProps = {
    colorLabel: 'white'
}

export default Input;
