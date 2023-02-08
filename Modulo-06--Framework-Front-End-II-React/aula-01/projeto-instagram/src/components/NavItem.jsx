import styled from "styled-components";
import { Text } from "../ui/Text";
import { Icon } from "./Icon";

const NavItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px;
    border-radius: 24px;
    align-items: center;
    margin: 4px 0;
    transition: all 0.2s;
    position: relative;

    svg {
        transition: all 0.2s;
    }

    img {
        transition: all 0.2s;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        object-fit: cover;
        border: 2px solid #fff;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);

        svg {
            transform: scale(1.1);
        }
        img {
            transform: scale(1.1);
        }
    }
`;

const Notification = styled.div`
    background-color: red;
    color: white;
    width: 16px;
    height: 16px;
    font-size: 12px;
    z-index: 1;
    line-height: 16px;
    text-align: center;
    border-radius: 8px;
    position: absolute;
    font-family: "Segoe UI", sans-serif;
    left: 26px;
    top: 8px;
`;

export const NavItem = (props) => {
    return (
        <NavItemWrapper>
            {props.notification && (
                <Notification>{props.notification}</Notification>
            )}
            {props.icon && (
                <Icon name={props.icon} label={props.text} size={24} />
            )}
            {props.image && <img src={props.image} alt="" />}
            <Text style={{ marginLeft: 16 }}>{props.text}</Text>
        </NavItemWrapper>
    );
};
