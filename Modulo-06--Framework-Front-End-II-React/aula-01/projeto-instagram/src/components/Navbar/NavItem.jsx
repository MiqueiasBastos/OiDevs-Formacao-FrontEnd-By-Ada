import * as S from "./style";

export const NavItem = (props) => {
    return (
        <S.NavItemWrapper onClick={props.onClick}>
            {props.notification && (
                <S.Notification>{props.notification}</S.Notification>
            )}
            {props.icon && (
                <S.IconItem name={props.icon} label={props.text} size={24} />
            )}
            {props.image && (
                <S.Image src={props.image} alt={props.text} />
            )}
            <S.TextItem>{props.text}</S.TextItem>
        </S.NavItemWrapper>
    );
};
