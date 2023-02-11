import * as S from "../Login/style";

import { Button } from "../../ui/Button";
import { Text, TextLink } from "../../ui/Text";

import { Logo } from "../../components/Logo";
import { useEffect, useMemo, useRef, useState } from "react";

export const SignUp = ({ onLoginPageClick }) => {
    const [fullName, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");

    const dateBirhtInput = useRef(null);

    useEffect(() => {
        if (dateBirhtInput != null) {
            dateBirhtInput.onfocus = () => {
                dateBirhtInput.type = "date";
            };
        }
    }, [dateBirhtInput]);

    const handdleSingupButtonClick = (e) => {
        e.preventDefault();
        const objReturn = {
            fullName,
            username,
            email,
            dateBirth: birthDate,
            age,
            password,
        };

        const isValidForm =
            fullName !== "" &&
            username !== "" &&
            email !== "" &&
            birthDate !== "" &&
            password !== "";

        if (isValidForm) {
            console.log(objReturn);
            alert(JSON.stringify(objReturn));
        } else {
            alert("Preencha todos os campos!");
        }
    };

    const today = useMemo(() => new Date(), []);

    const age = useMemo(() => {
        if (birthDate === "") {
            return "";
        }
        const bith = new Date(birthDate);
        let age = today.getFullYear() - bith.getFullYear();
        const month = today.getMonth() - bith.getMonth();

        if (month < 0 || (month === 0 && today.getDate() <= bith.getDate())) {
            age--;
        }

        return `${age} ${age > 1 ? "anos" : "ano"}`;
    }, [birthDate]);

    return (
        <S.Wrapper>
            <S.Content>
                <S.Box>
                    <S.ContentArea>
                        <S.LogoWrapper>
                            <Logo size={51} noPadding />
                        </S.LogoWrapper>
                        <Text size={18} center>
                            Cadastre-se para ver fotos e vídeos dos seus amigos.
                        </Text>
                        <S.Separator />
                        <S.CustomForm
                            onSubmit={handdleSingupButtonClick}
                            style={{ paddingTop: 10 }}
                        >
                            <S.CustomInput
                                type="text"
                                placeholder="Nome completo"
                                value={fullName}
                                onChange={(e) =>
                                    setFullname(e.currentTarget.value)
                                }
                            />

                            <S.CustomInput
                                type="text"
                                placeholder="Usuário"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.currentTarget.value)
                                }
                            />
                            <S.CustomInput
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.currentTarget.value)
                                }
                            />
                            <S.CustomInput
                                type="text"
                                ref={dateBirhtInput}
                                autoComplete="off"
                                placeholder="Data de nascimento"
                                value={birthDate}
                                max={today.toISOString().split("T")[0]}
                                onChange={(e) =>
                                    setBirthDate(e.currentTarget.value)
                                }
                                onFocus={() => {
                                    dateBirhtInput.current.type = "date";
                                }}
                                onBlur={() => {
                                    if (birthDate === "") {
                                        dateBirhtInput.current.type = "text";
                                    }
                                }}
                            />
                            <S.CustomInput
                                type="text"
                                autoComplete="off"
                                placeholder="Idade"
                                value={age}
                                disabled
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
                                    Cadastre-se
                                </Button>
                            </S.ButtonWrapper>
                        </S.CustomForm>
                    </S.ContentArea>
                    <S.ContentArea>
                        <Text>
                            Tem uma conta?{" "}
                            <TextLink
                                bold
                                color="#4db5f9"
                                onClick={onLoginPageClick}
                            >
                                Conecte-se
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
