import Products from "./Products";
import img1 from "./kursi.jpeg";
import img2 from "./poco.jpeg";
import img3 from "./ssd.png";

const Main = () => {
  return (
    <div>
      <Products
        nama="Kursi gaming Fantech"
        gambar={img1}
        harga="Rp 2.350.000,-"
      />
      <Products nama="POCO X6 Pro" gambar={img2} harga="Rp 4.999.000,-" />
      <Products
        nama="SSD Seagate 1TB Gen 4"
        gambar={img3}
        harga="Rp 2.450.000,-"
      />
    </div>
  );
};

export default Main;
