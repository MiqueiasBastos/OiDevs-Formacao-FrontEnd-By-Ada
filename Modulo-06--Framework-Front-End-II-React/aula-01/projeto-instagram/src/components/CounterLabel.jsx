import styled from "styled-components";
import { Text } from "../ui/Text";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

function fixNumber(number, fix) {
    return (Math.floor(number / fix) / 10).toString().replace(".", ",");
}
function numberFormat(number) {
    if (number >= 1000000000000) {
        return `${fixNumber(number, 100000000000)} tri`;
    }
    if (number >= 1000000000) {
        return `${fixNumber(number, 100000000)} bi`;
    }
    if (number >= 1000000) {
        return `${fixNumber(number, 100000)} mi`;
    }
    if (number >= 1000) {
        return `${fixNumber(number, 100)} mil`;
    }
    return number.toString();
}

export const CounterLabel = ({ number, label }) => {
    return (
        <Wrapper>
            <Text bold>{numberFormat(number)}</Text>
            <Text>&nbsp;{label}</Text>
        </Wrapper>
    );
};
