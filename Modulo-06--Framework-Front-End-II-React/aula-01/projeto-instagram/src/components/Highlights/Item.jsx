import * as S from "./style";
import { Avatar } from "../Avatar";

export const Item = ({ item }) => {
    return (
        <S.ItemWrapper>
            <Avatar size={77} image={item.image} border />
            <S.ItemText size={12} bold>
                {item.title}
            </S.ItemText>
        </S.ItemWrapper>
    );
};
