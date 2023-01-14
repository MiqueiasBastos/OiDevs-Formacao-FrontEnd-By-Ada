import "./styles.css";
function Input({ label, hideContent }) {
    return (
        <>
            <label className="label-input-default">{label}</label>
            <input
                className="input-default"
                type={hideContent ? "password" : "text"}
            />
        </>
    );
}

export default Input;
