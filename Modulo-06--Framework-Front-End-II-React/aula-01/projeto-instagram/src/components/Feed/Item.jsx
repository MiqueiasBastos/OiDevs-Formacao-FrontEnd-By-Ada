import * as S from "./style";

export const Item = ({ item }) => {
    return (
        <S.WrapperItem>
            {item.fixed && <S.PinIcon name="pinned" size={22} />}
            <S.Image src={item.urls.small} />
        </S.WrapperItem>
    );
};
