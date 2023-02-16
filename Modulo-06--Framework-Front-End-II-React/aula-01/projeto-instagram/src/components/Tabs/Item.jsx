import * as S from "./style";

export const Item = ({ label, icon, isCurrentTab, onClick }) => {
    return (
        <S.ItemWrapper isCurrentTab={isCurrentTab} onClick={onClick}>
            <S.ItemIcon
                name={icon}
                size={12}
                color={isCurrentTab ? "#FFF" : "#8e8e8e"}
            />
            <S.ItemText
                bold
                size={12}
                color={isCurrentTab ? "#FFF" : "#8e8e8e"}
            >
                {label}
            </S.ItemText>
        </S.ItemWrapper>
    );
};
