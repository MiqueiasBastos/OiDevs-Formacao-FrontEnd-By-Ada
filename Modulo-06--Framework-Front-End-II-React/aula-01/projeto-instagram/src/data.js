import profileImage from "./assets/profile.jpg";
import highlightComunidade from "./assets/highlight_comunidade.jpg";
import highlightDesafios from "./assets/highlight_desafios.jpg";
import highlightFaculdades from "./assets/highlight_faculdades.jpg";
import highlightModeloEducacional from "./assets/highlight_modelo-educacional.jpg";
import highlightParceiros from "./assets/highlight_parceiros.jpg";

export const itemsMenu = [
    { id: 1, title: "Página Inicial", icon: "home" },
    { id: 2, title: "Pesquisa", icon: "search" },
    { id: 3, title: "Explorar", icon: "discovery" },
    { id: 4, title: "Reels", icon: "reels" },
    { id: 5, title: "Mensagens", icon: "messages", notification: 1 },
    { id: 6, title: "Notificações", icon: "notifications" },
    { id: 7, title: "Criar", icon: "create" },
];

export const profileData = {
    publications: 216,
    followers: 44200,
    following: 2,
    user: "adatechbr",
    profileName: "Ada Tech",
    imageProfile: profileImage,
    category: "Educação",
    biography: "Ada. A Nova Educação.",
    website: "beacons.ai/adatechbr",
    followedBy: ["machado_bru", "CaioaSilva__", "fellipearb"],
    moreFollowers: 2,
};

export const highlights = [
    {
        title: 'Parceiros',
        image: highlightParceiros
    },
    {
        title: 'Desafios',
        image: highlightDesafios
    },
    {
        title: 'Comunidade',
        image: highlightComunidade
    },
    {
        title: 'Faculdade',
        image: highlightFaculdades
    },
    {
        title: 'Modelo Educacional',
        image: highlightModeloEducacional
    },

];