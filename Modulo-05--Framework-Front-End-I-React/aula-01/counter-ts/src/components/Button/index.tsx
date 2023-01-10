import "./style.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    title: string;
    onClick: () => void;
};

export function Button({ title, onClick, ...rest }: ButtonProps): React.ReactElement<HTMLButtonElement> {
    return (
        <button className="btn-default" onClick={onClick} {...rest}>
            {title}
        </button>
    );
}
