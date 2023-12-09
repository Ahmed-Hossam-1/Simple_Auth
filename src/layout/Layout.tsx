import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <main className="w-100" style={{ maxWidth: "400px" }}>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default Layout;
