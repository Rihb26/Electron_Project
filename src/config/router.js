import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home/home";
import App from "../screens/App/musicapp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/app",
    element: <musicapp/>
  }
]);

export default router;