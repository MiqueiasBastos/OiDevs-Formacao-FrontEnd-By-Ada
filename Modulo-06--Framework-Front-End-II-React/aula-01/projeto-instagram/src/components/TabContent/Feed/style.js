import styled from "styled-components";
import { Icon } from "../../Icon";

export const WrapperList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 935px;
    gap: 28px;
    padding: 0;
    list-style: none;
`;

export const WrapperItem = styled.li`
    width: 293px;
    height: 293px;
    cursor: pointer;
    position: relative;

    &:hover:after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const PinIcon = styled(Icon)`
    display: block;
    position: absolute;
    top: 5px;
    right: 5px;
`;
