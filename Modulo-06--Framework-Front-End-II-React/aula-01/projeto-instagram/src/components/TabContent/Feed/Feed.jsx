import { useEffect, useState } from "react";
import * as S from "./style";

import { Item } from "./Item";
import { Text } from "../../../ui/Text";
import { Loading } from "../../../ui/Loading";

import { getImageList } from "../../../services";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export const Feed = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const getImages = async () => {
        try {
            setErrorMessage("");
            const resultList = await getImageList();
            dispatch({ type: "SET_PUBLICATIONS_LIST", payload: resultList });
        } catch (e) {
            console.log(e);
            setErrorMessage("Não foi possível carregar o feed!");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <S.WrapperList>
            {errorMessage !== "" && <Text>{errorMessage}</Text>}
            {isLoading && <Loading size={32} />}

            {state.profile.publications.map((image, index) => {
                if (index < 3) {
                    // FakeFixed
                    image.fixed = true;
                }
                return <Item key={image.id} item={image} />;
            })}
        </S.WrapperList>
    );
};
