import "./Products.css";

function Products(props) {
  const { nama, gambar, harga } = props;
  return (
    <div className="card">
      <img src={gambar} alt="" />
      <div className="card-body">
        <h4>{nama}</h4>
        <p>Harga : {harga}</p>
        <button>Beli</button>
      </div>
    </div>
  );
}

export default Products;
