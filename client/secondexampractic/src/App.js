import {ROUTES} from "./routes/ROUTES";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
const routes = createBrowserRouter(ROUTES)
function App() {
  return (
    <>
    <RouterProvider router = {routes} />
    </>
  );
}

export default App;
