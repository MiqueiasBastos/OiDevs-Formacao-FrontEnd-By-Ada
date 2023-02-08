import styled from "styled-components";
import { Text } from "../ui/Text";
import { Icon } from "./Icon";

const Wrapper = styled.div`
    height: 52px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${(props) => props.atualTab && "border-top: 2px solid #FFF"};

    svg {
        margin-right: 5px;
    }

    &:not(:last-child) {
        margin-right: 60px;
    }
`;

const TextTab = styled(Text)`
    letter-spacing: 1px;
    text-transform: uppercase;
`;

export const TabItem = ({ label, icon, atualTab, onClick }) => {
    return (
        <Wrapper atualTab={atualTab} onClick={onClick}>
            <Icon name={icon} size={12} color={atualTab ? "#FFF" : "#8e8e8e"} />
            <TextTab bold size={12} color={atualTab ? "#FFF" : "#8e8e8e"}>
                {label}
            </TextTab>
        </Wrapper>
    );
};
