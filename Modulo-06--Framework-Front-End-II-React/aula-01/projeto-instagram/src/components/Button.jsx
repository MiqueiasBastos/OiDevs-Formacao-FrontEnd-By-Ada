import styled from "styled-components";
import { Text } from "../ui/Text";
import { Icon } from "./Icon";

const Wrapper = styled.button`
    display: flex;
    flex-direction: row;
    border: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: ${(props) => props.padding};
    border-radius: 8px;
    background-color: ${props=> props.color || '#efefef'};
    margin-left: ${props=> props.marginNone ? '0' : '8px'};

    svg {
        margin-left: 5px;
    }
`;

export const Button = ({ children, icon, color, marginNone }) => {
    return (
        <Wrapper color={color} padding={children !== undefined ? "7px 16px" : "0 10px 0 5px"} marginNone={marginNone}>
            {children && (
                <Text size={14} color="#000" bold>
                    {children}
                </Text>
            )}
            {icon && (
                <Icon name={icon} color="#000" size={children ? 12 : 16} />
            )}
        </Wrapper>
    );
};
