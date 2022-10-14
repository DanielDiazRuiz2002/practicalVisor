import SelectorProd from "./SelectorProd";
import "./Header.css";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Header() {
  const [mostrar, setMostrar] = useState(false);
  let [n_page, setN_page] = useState(0);

  return (
    <>
      <div
        class={
          n_page === 1
            ? "bg-gradient-dark shadow-sm w-100 position-fixed position-relative zindex-fixed top-0 start-0"
            : "bg-light shadow-sm w-100 position-fixed position-relative zindex-fixed top-0 start-0"
        }
        id="header-top"
      >
        <header
          id={n_page === 1 ? "color-fondo" : ""}
          class="d-flex flex-wrap justify-content-center py-3 ps-5 border-bottom me-md-auto"
        >
          <div></div>
          <div class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <Link
              to="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
              onClick={() => {
                setN_page(0);
              }}
            >
              <img src="./logo_DR.png" class="img-fluid" width={90} />
              <h1 class="text-danger fw-bold ps-3 pe-5" id="name-enterprise">
                <span style={{ color: "rgb(255, 50, 50)" }}>CONSORCIO DR</span>
              </h1>
            </Link>
          </div>

          <ul class="nav nav-pills align-items-center pe-5">
            <li class="nav-item p-2">
              <Link
                to="/AboutUs"
                class={n_page === 1 ? "nav-link text-light" : "nav-link"}
                onClick={() => {
                  setN_page(1);
                }}
              >
                Nosotros
              </Link>
            </li>
            <li
              class="nav-item p-2 pe-4"
              onMouseLeave={() => {
                setMostrar(false);
              }}
            >
              <a
                class={n_page === 1 ? "nav-link text-light" : "nav-link"}
                onMouseEnter={() => {
                  setMostrar(true);
                }}
              >
                Productos <span id="arrow">▼</span>
              </a>
              <SelectorProd show={mostrar} state={setN_page} />
            </li>
            <li class="nav-item">
              <Link to="/#Contactenos" class="nav-link active">
                Contactenos
              </Link>
            </li>
          </ul>
        </header>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
