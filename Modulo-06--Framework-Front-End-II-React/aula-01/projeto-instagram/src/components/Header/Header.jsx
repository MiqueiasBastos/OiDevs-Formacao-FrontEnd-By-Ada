import { useContext } from "react";
import { Avatar } from "../Avatar";
import { Button } from "../../ui/Button";
import { Text, TextLink } from "../../ui/Text";

import { CounterLabel } from "../CounterLabel";
import { Icon } from "../Icon";
import { GlobalContext } from "../../context/GlobalContext";
import * as S from "./style";

export const Header = () => {
    const context = useContext(GlobalContext);
    const { state } = context;

    return (
        <S.Wrapper>
            <S.AvatarWrapper>
                <Avatar image={state.profile.image} size={150} />
            </S.AvatarWrapper>
            <S.Content>
                <S.Infos>
                    <Text size={20}>{state.profile.username}</Text>
                    <S.ButtonsWrapper>
                        <Button icon="arrowDown">Seguindo</Button>
                        <Button>Enviar mensagem</Button>
                        <Button icon="follow" />
                    </S.ButtonsWrapper>
                    <Button bgColor="transparent" marginNone>
                        <Icon name="options" />
                    </Button>
                </S.Infos>
                <S.SocialInfos>
                    <CounterLabel
                        number={state.profile.publications.length}
                        label="publicações"
                    />
                    <CounterLabel
                        number={state.profile.followers.length}
                        label="seguidores"
                    />
                    <CounterLabel
                        number={state.profile.following.length}
                        label="seguindo"
                    />
                </S.SocialInfos>
                <S.ProfileInfos>
                    <Text size={14} bold>
                        {state.profile.profileName}
                    </Text>
                    <Text size={14} color="#a8a8a8">
                        {state.profile.category}
                    </Text>
                    <Text size={14}>{state.profile.biography}</Text>
                    <TextLink size={14} color="#e0f1ff" bold>
                        {state.profile.website}
                    </TextLink>
                </S.ProfileInfos>
                <S.FollowWrapper>
                    <Text color="#a8a8a8" size={12} bold>
                        {`Seguido(a) por `}
                        {state.profile.followers.length > 3 ? (
                            <>
                                <Text color="#FFF" size={12} bold>
                                    {state.profile.followers
                                        .filter((item, index) => index < 3)
                                        .join(", ")}
                                </Text>
                                {` e outras ${
                                    state.profile.followers.length - 3
                                } pessoas`}
                            </>
                        ) : (
                            <Text color="#FFF" size={12} bold>
                                {state.profile.followers.join(", ")}
                            </Text>
                        )}
                    </Text>
                </S.FollowWrapper>
            </S.Content>
        </S.Wrapper>
    );
};
