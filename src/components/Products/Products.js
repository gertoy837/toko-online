import "./Products.css";

function Products(props) {
  const { nama, gambar, harga, berat, terjual } = props;
  return (
    <div className="card">
      <div class="card-header">
        <img src={gambar} alt="" />
      </div>
      <div className="card-body">
        <h4>{nama}</h4>
        <p>Harga : Rp. {harga}.-</p>
        <p>Berat : {berat}</p>
        <p>Terjual : {terjual}</p>
        <button>Beli</button>
      </div>
    </div>
  );
}

export default Products;
