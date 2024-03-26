function Products(props) {
  const { nama, gambar, harga } = props;
  return (
    <div>
      <ul>
          <img src={gambar} alt="" />
          <li>
            {nama} - {harga}
          </li>
        </ul>
    </div>
  );
}

export default Products;
