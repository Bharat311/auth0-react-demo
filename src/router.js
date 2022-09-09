import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { LandingPage } from "./pages/LandingPage";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route element={<AuthLayout/>}>
          <Route path="/dashboard" element={<DashboardPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const AuthLayout = () => {
  const { isAuthenticated } = useAuth0;
  return isAuthenticated ? <Outlet/> : <Navigate to={"/"} replace/>
};
