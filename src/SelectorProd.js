import { Link } from "react-router-dom";

function SelectorProd({ show, statePrueba }) {
  if (show) {
    return (
      <div>
        <ul
          class="dropdown-menu text-small show mt-2"
          aria-labelledby="dropdownUser1"
          data-popper-placement="bottom-start"
        >
          <li>
            <Link
              to="/#Harinas"
              class="dropdown-item"
              onClick={() => {
                statePrueba(0);
              }}
            >
              Harinas
            </Link>
          </li>
          <li>
            <Link
              class="dropdown-item"
              to="/#Mantecas"
              onClick={() => {
                statePrueba(0);
              }}
            >
              Mantecas
            </Link>
          </li>
          <li>
            <Link
              class="dropdown-item"
              to="/#Levaduras"
              onClick={() => {
                statePrueba(0);
              }}
            >
              Levaduras
            </Link>
          </li>
          <li>
            <Link
              class="dropdown-item"
              to="/#Pre-mezclas"
              onClick={() => {
                statePrueba(0);
              }}
            >
              Pre mezclas
            </Link>
          </li>
          <li>
            <Link
              class="dropdown-item"
              to="/#Aceites"
              onClick={() => {
                statePrueba(0);
              }}
            >
              Aceites
            </Link>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <Link
              class="dropdown-item"
              to="/#Consumo-masivo"
              onClick={() => {
                statePrueba(0);
              }}
            >
              Consumo masivo
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
}

export default SelectorProd;
