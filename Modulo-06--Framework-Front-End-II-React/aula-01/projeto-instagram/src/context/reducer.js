export const initialState = {
    currentPage: "login",
    selectedImage: null,
    profile: {
        username: "",
        name: "Nome do Usuário",
        image: "https://source.unsplash.com/collection/895539/480x480/?sig=1",
        category: "Blog pessoal",
        biography: "Esta é uma biografia generica.",
        website: "meusite.com.br/bio",
        highlights: [
            {
                id: 1,
                title: "Parceiros",
                image: "https://source.unsplash.com/collection/298137/300x320/?sig=1",
            },
            {
                id: 2,
                title: "Desafios",
                image: "https://source.unsplash.com/collection/298137/300x320/?sig=2",
            },
            {
                id: 3,
                title: "Comunidade",
                image: "https://source.unsplash.com/collection/298137/300x320/?sig=3",
            },
            {
                id: 4,
                title: "Destaque",
                image: "https://source.unsplash.com/collection/298137/300x320/?sig=4",
            },
            {
                id: 5,
                title: "Diversão",
                image: "https://source.unsplash.com/collection/298137/300x320/?sig=5",
            },
        ],
        publications: [],
        followers: [
            "machado_bru",
            "caioasilva__",
            "fellipearb",
            "miqueias.bastos",
            "instagram",
        ],
        following: ["miqueias.bastos", "instagram_oficial"],
    },
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload,
            };
        case "SET_PUBLICATIONS_LIST":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    publications: action.payload,
                },
            };
        case "CHANGE_USERNAME":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    username: action.payload,
                },
            };
        case "CHANGE_IMAGE_PROFILE":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    image: `https://source.unsplash.com/collection/895539/480x480/?sig=${Date.now()}`,
                },
            };
        case "CHANGE_SELECTED_IMAGE":
            const selectedImage = state.profile.publications.find(
                (image) => image.id === action.payload
            );
            return {
                ...state,
                selectedImage,
            };
        case "CLEAR_SELECTED_IMAGE":
            return {
                ...state,
                selectedImage: null,
            };
        default:
            return state;
    }
};
