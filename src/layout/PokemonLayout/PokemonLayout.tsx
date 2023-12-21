import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { Header } from "../../global";

const PokemonLayout = () => {
  return (
    <main className="main-container">
      <Header />
      <section>
        <Container>
          <Outlet />
        </Container>
      </section>
    </main>
  );
};

export default PokemonLayout;
