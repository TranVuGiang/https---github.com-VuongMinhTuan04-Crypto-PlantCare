import LayoutGame from "@/DefaultLayouts/LayoutGame";
import LayoutWebsite from "@/DefaultLayouts/LayoutWebsite";
import GameHome from "@/pages/gameUI/GameHome";
import ShopPage from "@/pages/gameUI/GameShopping";
import Home from "@/pages/home";

const publicRoutes = [
    {path: "/", component: Home, layout: LayoutWebsite}, 
    {path: "/game-playing", component: GameHome,  layout: LayoutGame},
    {path: "/game-shopping", component: ShopPage,  layout: LayoutGame},
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };

