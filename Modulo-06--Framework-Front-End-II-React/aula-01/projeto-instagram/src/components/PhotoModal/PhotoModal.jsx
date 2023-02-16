import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Button } from "../../ui/Button";
import { Text } from "../../ui/Text";
import { Icon } from "../Icon";
import * as S from "./style";

export const PhotoModal = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const handleCloseModal = () => {
        dispatch({ type: "CLEAR_SELECTED_IMAGE" });
    };

    console.log(state.selectedImage);
    return (
        state.selectedImage && (
            <S.Overlayer>
                <S.Wrapper>
                    <S.ImageWrapper>
                        <img src={state.selectedImage.urls.small} alt="" />
                    </S.ImageWrapper>
                    <S.ContentWrapper>
                        <S.Header>
                            <img src={state.profile.image} alt="" />
                            <Text color="#fff" bold>
                                {state.profile.username}
                            </Text>
                            <Button
                                onClick={handleCloseModal}
                                bgColor="transparent"
                                textColor="#FFF"
                                icon="close"
                            />
                        </S.Header>
                        <S.Content>
                            <S.Comment>
                                <img src={state.profile.image} alt="" />
                                <S.CommentText>
                                    <Text>
                                        <Text bold>
                                            {state.profile.username}
                                        </Text>{" "}
                                        {state.selectedImage.created_at}
                                    </Text>
                                    <Text>
                                        {state.selectedImage.alt_description}
                                    </Text>
                                </S.CommentText>
                            </S.Comment>
                        </S.Content>
                        <S.Comments>
                            <Text>Nenhum Comentário</Text>
                        </S.Comments>
                        <S.Footer>
                            <Icon name="emoji" size={40} />
                            <input
                                type="text"
                                placeholder="Adicione um comentário..."
                            />
                            <Button textColor="#4db5f9" bgColor="transparent">
                                Publicar
                            </Button>
                        </S.Footer>
                    </S.ContentWrapper>
                </S.Wrapper>
            </S.Overlayer>
        )
    );
};
