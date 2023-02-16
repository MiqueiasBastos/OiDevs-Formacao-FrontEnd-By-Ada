import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import * as S from "./style";

export const Item = ({ item }) => {
    const { dispatch } = useContext(GlobalContext);

    const handleImageClick = () => {
        dispatch({ type: "CHANGE_SELECTED_IMAGE", payload: item.id });
    };
    return (
        <S.WrapperItem onClick={handleImageClick}>
            {item.fixed && <S.PinIcon name="pinned" size={22} />}
            <S.Image src={item.urls.small} />
        </S.WrapperItem>
    );
};
