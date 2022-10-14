import "./Main.css";
import Footer from "./Footer";
import VisorProductos from "./VisorProductos";

function Main() {
  return (
    <>
      <div class="container zindex-dropdown">
        <div id="harinas-nav" class="auxiliar-div"></div>
        <VisorProductos idProd={0} nameVisor={"Harinas"}/>
        <h2 class="col-3">Mantecas</h2>
        <h2>Levaduras</h2>
        <h2>Pre mezclas</h2>
        <h2>Aceites</h2>
        <h2>Consumo masivo</h2>
      </div>
      <Footer />
    </>
  );
}

export default Main;
