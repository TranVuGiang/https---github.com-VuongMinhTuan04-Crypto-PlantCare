import ItemShopModal from "@/components/gameComponents/buynfts";
import LayoutGame from "@/DefaultLayouts/LayoutGame";
import LayoutWebsite from "@/DefaultLayouts/LayoutWebsite";
import GameHome from "@/pages/gameUI/GameHome";
import Wallet from "@/pages/gameUI/Wallet/wallet";
import Transfer from "@/pages/gameUI/Wallet/transfer";
import Home from "@/pages/home";

const publicRoutes = [
    {path: "/", component: Home, layout: LayoutWebsite}, 
    {path: "/game-playing", component: GameHome,  layout: LayoutGame},
    {path: "/game-playing/shop", component: ItemShopModal,  layout: LayoutGame},
    {path: "/wallet", component: Wallet, layout: LayoutGame},
    {path: "/wallet/transfer", component: Transfer, layout: LayoutGame}
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
