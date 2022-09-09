import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { LandingPage } from "./pages/LandingPage";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
