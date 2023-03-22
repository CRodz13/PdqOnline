import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Crud from "./components/Crud";
import FoodModal from "./components/FoodModal";
import Menu from "./components/Menu";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/pdqEmployee',
    element: <Crud />
  },
  {
    path: '/FoodModal',
    element: <FoodModal />
  },
  {
    path: '/OnlineOrder',
    element: <Menu />
  }

];

export default AppRoutes;
