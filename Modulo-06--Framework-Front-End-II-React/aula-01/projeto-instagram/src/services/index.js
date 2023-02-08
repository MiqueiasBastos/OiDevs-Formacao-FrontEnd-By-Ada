import { ACCESS_KEY, BASE_URL } from "./config";

export const getImageList = async () => {
    const result = await fetch(
        `${BASE_URL}/photos/?client_id=${ACCESS_KEY}&per_page=12`
    );

    return result.json();
};
