import * as S from "./style";
import { Item } from "./Item";

export const Tabs = ({ currentTab, onChangeTab }) => {
    return (
        <S.TabsWrapper>
            <Item
                label="Publicações"
                icon="posts"
                isCurrentTab={currentTab === "posts"}
                onClick={() => onChangeTab("posts")}
            />
            <Item
                label="Reels"
                icon="reels"
                isCurrentTab={currentTab === "reels"}
                onClick={() => onChangeTab("reels")}
            />
            <Item
                label="Marcados"
                icon="marked"
                isCurrentTab={currentTab === "marked"}
                onClick={() => onChangeTab("marked")}
            />
        </S.TabsWrapper>
    );
};
