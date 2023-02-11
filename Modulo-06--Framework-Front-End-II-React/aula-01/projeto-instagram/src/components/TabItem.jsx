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

    ${(props) => props.currentTab && "border-top: 2px solid #FFF"};

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

export const TabItem = ({ label, icon, currentTab, onClick }) => {
    return (
        <Wrapper currentTab={currentTab} onClick={onClick}>
            <Icon
                name={icon}
                size={12}
                color={currentTab ? "#FFF" : "#8e8e8e"}
            />
            <TextTab bold size={12} color={currentTab ? "#FFF" : "#8e8e8e"}>
                {label}
            </TextTab>
        </Wrapper>
    );
};
