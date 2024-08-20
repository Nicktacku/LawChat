import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import HomeChat from "./pages/HomeChat.js";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homechat" element={<HomeChat />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
