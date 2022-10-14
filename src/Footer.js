import FooterSection from "./FooterSection";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer-container">
      <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 border-top">
          <div class="col mb-3">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-light text-decoration-none"
            >
              <svg class="bi me-2" width="40" height="32">
                <use href="#bootstrap"></use>
              </svg>
            </a>
            <p class="text-light">© Consorcio D.R. E.I.R.L. 2022</p>
            <p class="text-light">Puno - San Roman - Juliaca</p>
          </div>

          <div class="col mb-3"></div>

          
          <FooterSection
            name={"Contactenos"}
            sections={[
              "Tel. 950066296 (+54)",
              "",
              "Correo de contacto:",
              "consorciodr@hotmail.com",
            ]}
          />

          <FooterSection
            name={"Ubicación"}
            sections={[
              "Jr. Sucre Nro. 524 Barrio Manco Capac",
              " ",
              "Referencia: ",
              "Frente a la escuela Marical Sucre",
            ]}
          />

          <FooterSection
            name={"Horario de atencion"}
            sections={[
              "De lunes a viernes: ",
              "8:00 am - 6:00 pm",
              " ",
              "Sabados: ",
              "8:00 am - 2:00 pm",
            ]}
          />
        </footer>
      </div>
    </div>
  );
}

export default Footer;
