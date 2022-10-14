import "./AboutUs.css";
import Footer from "./Footer";

function AboutUs() {
  return (
    <>
      <div id="fondo">
        <img class="bg-img w-100" src="./fondo.jpg" />
        <div id="footer-about-us">
          <div class="containter-sm">
            <h1></h1>
          </div>
          <br />
        </div>
        <div class="container text-light">
          <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-2">
              <h2>Quienes somos: </h2>
              <p class="ps-3 pe-3">Floro</p>
              <br />
            </div>
            <div class="col mb-2">
              <h2>Misión y Visión: </h2>
              <p class="ps-3 pe-3">Floro</p>
              <br />
            </div>
            <h2>Nuestro compromiso con los cliente: </h2>
            <p class="ps-3 pe-3">Floro</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
