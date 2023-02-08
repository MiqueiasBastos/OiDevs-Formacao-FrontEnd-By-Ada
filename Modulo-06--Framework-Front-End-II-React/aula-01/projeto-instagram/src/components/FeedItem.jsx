import styled from "styled-components";
import { Icon } from "./Icon";

const Wrapper = styled.li`
    width: 293px;
    height: 293px;
    margin-bottom: 28px;
    margin-right: 28px;
    cursor: pointer;
    position: relative;

    &:nth-child(3n) {
        margin-right: 0;
    }

    &:hover:after {
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;

        left: 0;
        right: 0;
        content: "";
        background-color: rgba(0, 0, 0, 0.2);
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    svg {
        position: absolute;
        top: 5px;
        right: 5px;
    }
`;

export const FeedItem = ({ item }) => {
    return (
        <Wrapper>
            {item.fixed && <Icon name="pinned" size={22} />}
            <img src={item.urls.small} />
        </Wrapper>
    );
};
