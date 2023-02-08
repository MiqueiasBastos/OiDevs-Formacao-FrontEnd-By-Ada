import styled from "styled-components";
import { Text } from "../ui/Text";
import { Avatar } from "./Avatar";

const Wrapper = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    width: 125px;
    cursor: pointer;

    span {
        margin-top: 15px;
        width: 85px;
        text-overflow: ellipsis;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
    }
`;
export const HighlightItem = ({ item }) => {
    return (
        <Wrapper>
            <Avatar size={77} image={item.image} border />
            <Text size={12} bold>
                {item.title}
            </Text>
        </Wrapper>
    );
};
