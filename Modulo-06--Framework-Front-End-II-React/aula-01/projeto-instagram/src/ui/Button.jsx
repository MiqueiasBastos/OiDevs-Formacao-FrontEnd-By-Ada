import styled from "styled-components";
import { Text } from "./Text";
import { Icon } from "../components/Icon";

const Wrapper = styled.button`
    display: flex;
    flex-direction: row;
    border: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: ${({ padding }) => padding};
    border-radius: 8px;
    background-color: ${({ bgColor }) => bgColor || "#efefef"};
    margin-left: ${({ marginNone }) => (marginNone ? "0" : "8px")};
    ${({ fullWidth }) => fullWidth && "width: 100%;"}

    svg {
        margin-left: 5px;
    }
`;

export const Button = ({
    children,
    icon,
    bgColor,
    textColor,
    marginNone,
    fullWidth,
    ...rest
}) => {
    return (
        <Wrapper
            bgColor={bgColor}
            padding={children !== undefined ? "7px 16px" : "0 10px 0 5px"}
            marginNone={marginNone}
            fullWidth={fullWidth}
            {...rest}
        >
            {children && (
                <Text size={14} color={textColor || "#000"} bold>
                    {children}
                </Text>
            )}
            {icon && (
                <Icon
                    name={icon}
                    color={textColor || "#000"}
                    size={children ? 12 : 16}
                />
            )}
        </Wrapper>
    );
};
