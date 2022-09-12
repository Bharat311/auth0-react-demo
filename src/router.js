import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
