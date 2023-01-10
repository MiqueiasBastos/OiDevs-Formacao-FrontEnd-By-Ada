import "./style.css"
export function Button({ title, onClick, ...rest }) {
    return (
        <button className="btn-default" onClick={onClick} {...rest}>
            {title}
        </button>
    );
}
