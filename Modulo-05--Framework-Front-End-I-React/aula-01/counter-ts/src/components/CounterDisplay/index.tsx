import "./style.css";

type CounterDisplayProps = {
    value: number;
};
export function CounterDisplay({ value }: CounterDisplayProps): React.ReactElement<HTMLDivElement>{
    return <div className="display-counter">{value}</div>;
}
