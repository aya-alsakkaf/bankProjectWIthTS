import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/auth/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContext from "./Context/UserContext";
import { getToken } from "./API/storage";
import NAVIGATION from "./navigation";
import Home from "./pages/Home/Home";
import Profile from "./pages/Home/Profile";
import Users from "./pages/Home/Users";

const router = createBrowserRouter([
  {
    path: NAVIGATION.LOGIN,
    element: <Login />,
  },
  {
    path: NAVIGATION.REGISTER,
    element: <Register />,
  },
  {
    path: NAVIGATION.DASHBOARD,
    element: <Home />,
    children: [
      {
        path: NAVIGATION.PROFILE,
        element: <Profile />,
      },
      {
        path: NAVIGATION.USERS,
        element: <Users />,
      },
    ],
  },
  {},
]);
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) setIsAuthenticated(true);
  }, []);
  return (
    <QueryClientProvider client={new QueryClient()}>
      <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
