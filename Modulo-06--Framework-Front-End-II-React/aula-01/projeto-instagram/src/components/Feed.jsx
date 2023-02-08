import { useEffect, useState } from "react";
import styled from "styled-components";
import { getImageList } from "../services/index";
import { FeedItem } from "./FeedItem";

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 935px;
    padding: 0;
    list-style: none;
`;

export const Feed = () => {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        async function getList() {
            try {
                const resultList = await getImageList();
                setImageList(resultList);
                console.log(resultList);
            } catch (e) {
                alert(e.message);
            }
        }
        getList();
    }, []);

    return (
        <List>
            {imageList.map((image, index) => {
                if (index < 3) {
                    // FakeFixed
                    image.fixed = true;
                }

                return <FeedItem key={image.id} item={image} />;
            })}
        </List>
    );
};
