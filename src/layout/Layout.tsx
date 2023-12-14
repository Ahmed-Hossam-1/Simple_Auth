import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AuthProvider from "../context/AuthContext";

const Layout = () => {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <main className="w-100" style={{ maxWidth: "400px" }}>
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        </main>
      </Container>
    </>
  );
};

export default Layout;
