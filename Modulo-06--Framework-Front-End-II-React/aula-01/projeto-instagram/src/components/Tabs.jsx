import styled from "styled-components";
import { TabItem } from "./TabItem";

const Wrapper = styled.div`
    border-top: 1px solid #262626;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
export const Tabs = ({ atualTab, onChangeTab }) => {
    return (
        <Wrapper>
            <TabItem
                label="Publicações"
                icon="posts"
                atualTab={atualTab === "posts"}
                onClick={()=> onChangeTab('posts')}
            />
            <TabItem
                label="Reels"
                icon="reels"
                atualTab={atualTab === "reels"}
                onClick={()=> onChangeTab('reels')}
            />
            <TabItem
                label="Marcados"
                icon="marked"
                atualTab={atualTab === "marked"}
                onClick={()=> onChangeTab('marked')}
            />
        </Wrapper>
    );
};
