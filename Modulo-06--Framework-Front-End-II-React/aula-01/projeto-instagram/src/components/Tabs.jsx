import styled from "styled-components";
import { TabItem } from "./TabItem";

const Wrapper = styled.div`
    border-top: 1px solid #262626;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
export const Tabs = ({ currentTab, onChangeTab }) => {
    return (
        <Wrapper>
            <TabItem
                label="Publicações"
                icon="posts"
                currentTab={currentTab === "posts"}
                onClick={() => onChangeTab("posts")}
            />
            <TabItem
                label="Reels"
                icon="reels"
                currentTab={currentTab === "reels"}
                onClick={() => onChangeTab("reels")}
            />
            <TabItem
                label="Marcados"
                icon="marked"
                currentTab={currentTab === "marked"}
                onClick={() => onChangeTab("marked")}
            />
        </Wrapper>
    );
};
