import { useContext } from "react";
import * as S from "./style";
import { GlobalContext } from "../../context/GlobalContext";
import { Item } from "./Item";

export const Highlights = () => {
    const { state } = useContext(GlobalContext);

    return (
        <S.HighlightsWrapper>
            {state.profile.highlights.map((highlight) => (
                <Item key={highlight.id} item={highlight} />
            ))}
        </S.HighlightsWrapper>
    );
};
