import { useEffect, useState } from "react";
import * as S from "./style";

import { Item } from "./Item";
import { Text } from "../../ui/Text";
import { Loading } from "../../ui/Loading";

import { getImageList } from "../../services/index";

export const Feed = () => {
    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const getImages = async () => {
        try {
            setErrorMessage("");
            const resultList = await getImageList();
            setImageList(resultList);
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

            {imageList.map((image, index) => {
                if (index < 3) {
                    // FakeFixed
                    image.fixed = true;
                }
                return <Item key={image.id} item={image} />;
            })}
        </S.WrapperList>
    );
};
