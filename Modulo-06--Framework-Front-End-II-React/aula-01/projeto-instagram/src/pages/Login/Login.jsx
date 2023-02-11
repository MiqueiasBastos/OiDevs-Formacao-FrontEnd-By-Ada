import { useState } from "react";
import * as S from "./style";

import { Button } from "../../ui/Button";
import { Text, TextLink } from "../../ui/Text";

import loginPhoneImage from "../../assets/login-phones.png";
import { Logo } from "../../components/Logo";

export const Login = ({ onLogin, onSignUpPageClick }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <S.Wrapper>
            <S.Content>
                <S.Box>
                    <img src={loginPhoneImage} alt="" />
                </S.Box>
                <S.Box>
                    <S.ContentArea>
                        <S.LogoWrapper>
                            <Logo size={51} noPadding />
                        </S.LogoWrapper>
                        <S.CustomForm
                            onSubmit={(e) => {
                                e.preventDefault();
                                onLogin();
                            }}
                        >
                            <S.CustomInput
                                type="text"
                                placeholder="Telefone, nome de usuário ou email"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.currentTarget.value)
                                }
                            />
                            <S.CustomInput
                                type="password"
                                autoComplete="off"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.currentTarget.value)
                                }
                            />
                            <S.ButtonWrapper>
                                <Button
                                    type="submit"
                                    bgColor="#4db5f9"
                                    textColor="#FFF"
                                    marginNone
                                    fullWidth
                                >
                                    Entrar
                                </Button>
                            </S.ButtonWrapper>
                        </S.CustomForm>
                        <S.Separator />
                        <TextLink
                            onClick={() =>
                                alert("Funcionalidade indisponível!")
                            }
                        >
                            Esqueceu a senha?
                        </TextLink>
                    </S.ContentArea>
                    <S.ContentArea>
                        <Text>
                            Não tem uma conta?{" "}
                            <TextLink
                                bold
                                color="#4db5f9"
                                onClick={() => {
                                    onSignUpPageClick();
                                }}
                            >
                                Cadastre-se
                            </TextLink>
                        </Text>
                    </S.ContentArea>
                </S.Box>
            </S.Content>
            <S.Footer>
                <Text>
                    Feito com <Text color="red">♥</Text> na formação{" "}
                    <Text bold>OiDevs</Text> by{" "}
                    <TextLink bold href="https://ada.tech/" target="_blank">
                        AdaTech
                    </TextLink>
                </Text>
            </S.Footer>
        </S.Wrapper>
    );
};
