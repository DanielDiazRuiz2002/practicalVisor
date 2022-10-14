function Product({ prod }) {
  return (
    <div class="p-1">
      <div class="card w-100 text-center">
        <img src={prod.src} class="card-img-top w-90" alt={prod.name}></img>
        <div class="card-body">
          <h2 class="card-title">{prod.name}</h2>
          <p class="card-text">{prod.description}</p>
        </div>
        <div class="card-footer text-left">
          <h5>Price: S/.{prod.price}</h5>
        </div>
        <a href="#Ref" class="btn btn-primary">
          Add to car
        </a>
      </div>
    </div>
  );
}

export default Product;
