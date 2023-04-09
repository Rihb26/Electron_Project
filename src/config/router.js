import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home/home";
import Musicapp from "../screens/App/musicapp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/app",
    element: <Musicapp/>
  }
]);

export default router;
