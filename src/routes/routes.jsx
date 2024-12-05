import LayoutGame from '@/DefaultLayouts/LayoutGame';
import LayoutWebsite from '@/DefaultLayouts/LayoutWebsite';
import GameHome from '@/pages/gameUI/GameHome';
import Home from '@/pages/home';
import LoginPage from '@/pages/login';
import FoundWallet from '@/pages/login2';
import Swap from '@/pages/login3';
import Mint from '@/pages/login4';
import ActivityView from '@/pages/activities';
import ReferAndEarn from '@/pages/ReferAndEarn';
import InviteBonus from '@/pages/invitebonus';
import ShopPage from "@/pages/gameUI/GameShopping";
import Wallet from "@/pages/gameUI/Wallet/wallet";
import Transfer from "@/pages/gameUI/Wallet/transfer";

const publicRoutes = [
  { path: '/', component: Home, layout: LayoutWebsite },
  { path: '/game-playing', component: GameHome, layout: LayoutGame },
  { path: '/game-login', component: LoginPage, layout: LayoutGame },
  { path: '/game-login2', component: FoundWallet, layout: LayoutGame },
  { path: '/game-login3', component: Swap, layout: LayoutGame },
  { path: '/game-login4', component: Mint, layout: LayoutGame },
  { path: '/game-activities', component: ActivityView, layout: LayoutGame },
  { path: '/game-referandearn', component: ReferAndEarn, layout: LayoutGame },
  { path: '/game-invitebonus', component: InviteBonus, layout: LayoutGame },
  { path: "/game-shopping", component: ShopPage,  layout: LayoutGame},
  { path: "/game-playing/shop", component: ItemShopModal,  layout: LayoutGame},
  { path: "/wallet", component: Wallet, layout: LayoutGame},
  { path: "/wallet/transfer", component: Transfer, layout: LayoutGame}
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
