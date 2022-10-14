import Product from "./Product";
import "./VisorProductos.css";
import { useState } from "react";

let harinas = [
  {
    name: "Producto 1",
    description: "Actualmente, Blanca Flor es líder indiscutible asdweqwewqeq",
    src: "harina_prueba.jpg",
    price: "9.50",
  },
  {
    name: "Producto 2",
    description: "MANTECA FAMOSA Manteca panadera 100% vegetal que se olorF",
    src: "harina_prueba.jpg",
    price: "115.00",
  },
  {
    name: "Producto 3",
    description: "MANTECA FAMOSA Manteca panadera 100% vegetal que  y olorF",
    src: "harina_prueba.jpg",
    price: "115.00",
  },
  {
    name: "Producto 4",
    description: "Actualmente, Blanca Flor es líder indiscutible asdweqwewqeq",
    src: "harina_prueba.jpg",
    price: "9.50",
  },
  {
    name: "Producto 5",
    description: "MANTECA FAMOSA Manteca panadera 100% vegetal que se olorF",
    src: "harina_prueba.jpg",
    price: "115.00",
  },
  {
    name: "Producto 6",
    description: "MANTECA FAMOSA Manteca panadera 100% vegetal que  y olorF",
    src: "harina_prueba.jpg",
    price: "115.00",
  },
  {
    name: "Producto 7",
    description: "MANTECA FAMOSA Manteca panadera 100% vegetal que  y olorF",
    src: "harina_prueba.jpg",
    price: "115.00",
  },
  {
    name: "Producto 8",
    description: "MANTECA FAMOSA Manteca panadera 100% vegetal que  y olorF",
    src: "harina_prueba.jpg",
    price: "115.00",
  },
];

let listProd = [harinas];

function VisorProductos({ idProd, nameVisor }) {
  let [idCol, setIdCol] = useState(0);

  function flecha_izq() {
    if (idCol > 2) {
      setIdCol(idCol - 3);
    } else {
      if (idCol === 0) {
        setIdCol(listProd[idProd].length - 3);
      } else {
        setIdCol(0);
      }
    }
  }

  function flecha_der() {
    if (idCol < listProd[idProd].length - 5) {
      setIdCol(idCol + 3);
    } else {
      if (idCol === listProd[idProd].length - 3) {
        setIdCol(0);
      } else {
        setIdCol(listProd[idProd].length - 3);
      }
    }
  }

  return (
    <>
      <div class="row">
        <h2 class="col-9">{nameVisor}</h2>
      </div>
      <div class="row no-gutters justify-content-center">
        <div id="button_nav_izq" class="col-1" onClick={() => flecha_izq()}>
          <span class="flecha">‹</span>
        </div>
        <div id="prod_1" class="col-3">
          <Product prod={listProd[idProd][idCol + 0]} />
        </div>
        <div id="prod_2" class="col-3">
          <Product prod={listProd[idProd][idCol + 1]} />
        </div>
        <div id="prod_3" class="col-3">
          <Product prod={listProd[idProd][idCol + 2]} />
        </div>
        <div id="button_nav_der" class="col-1" onClick={() => flecha_der()}>
          <span class="flecha">›</span>
        </div>
      </div>
    </>
  );
}

export default VisorProductos;
