import profileImage from "../assets/profile.jpg";

export const initialState = {
    currentPage: "login",
    profile: {
        publications: 216,
        followers: 44200,
        following: 2,
        user: "adatechbr",
        profileName: "Ada Tech",
        imageProfile: profileImage,
        category: "Educação",
        biography: "Ada. A Nova Educação.",
        website: "beacons.ai/adatechbr",
        followedBy: ["machado_bru", "caioasilva__", "fellipearb"],
        moreFollowers: 2,
    },
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
};
