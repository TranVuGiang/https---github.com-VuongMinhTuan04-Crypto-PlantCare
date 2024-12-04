import ItemShopModal from "@/components/gameComponents/buynfts";
import LayoutGame from "@/DefaultLayouts/LayoutGame";
import LayoutWebsite from "@/DefaultLayouts/LayoutWebsite";
import GameHome from "@/pages/gameUI/GameHome";
import Home from "@/pages/home";

const publicRoutes = [
    {path: "/", component: Home, layout: LayoutWebsite}, 
    {path: "/game-playing", component: GameHome,  layout: LayoutGame},
    {path: "/game-playing/shop", component: ItemShopModal,  layout: LayoutGame},
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };

