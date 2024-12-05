import ItemShopModal from "@/components/gameComponents/buynfts";
import LayoutGame from "@/DefaultLayouts/LayoutGame";
import BgLeaderBoard from "@/DefaultLayouts/LayoutLeaderBoard";
import LayoutWebsite from "@/DefaultLayouts/LayoutWebsite";
import GameHome from "@/pages/gameUI/GameHome";
import LeaderBoard from "@/pages/gameUI/LeaderBoard";
import Wallet from "@/pages/gameUI/Wallet";
import Home from "@/pages/home";

const publicRoutes = [
    {path: "/", component: Home, layout: LayoutWebsite}, 
    {path: "/game-playing", component: GameHome,  layout: LayoutGame},
    {path: "/game-playing/shop", component: ItemShopModal,  layout: LayoutGame},
    {path:"/leader-board",component: LeaderBoard, layout: BgLeaderBoard},
    {path:"/wallet",component: Wallet, layout: BgLeaderBoard}
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };

