import "./styles.css";
import PropTypes from "prop-types";

const Subtitle = ({ text }) => {
    return <h2 style={{ color: "#FFF" }}>{text}</h2>;
};

Subtitle.propTypes = {
    text: PropTypes.string,
};

export default Subtitle;
