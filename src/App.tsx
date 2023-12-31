import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import UpdateProfile from "./components/UpdateProfile";
import RequireAuth from "./context/RequireAuth";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
