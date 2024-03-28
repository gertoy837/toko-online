import Products from "../Products/Products";
import img1 from "./img/kursi.jpeg";
import img2 from "./img/poco.jpeg";
import img3 from "./img/ssd.png";
import img4 from "./img/iphone.jpeg";
import img5 from "./img/keyboard.jpeg";
import img6 from "./img/macbook.jpeg";
import img7 from "./img/realme.jpeg";
import img8 from "./img/rog.jpeg";
import "./Main.css";

const Main = () => {
  return (
    <div className="content">
      <Products
        nama="Kursi gaming Fantech"
        gambar={img1}
        harga="Rp 2.350.000,-"
      />
      <Products nama="POCO X6 Pro 5G" gambar={img2} harga="Rp 4.999.000,-" />
      <Products
        nama="SSD Seagate 1TB Gen 4"
        gambar={img3}
        harga="Rp 2.450.000,-"
      />
      <Products
        nama="Iphone 14 Pro Max"
        gambar={img4}
        harga="Rp 24.450.000,-"
      />{" "}
      <Products nama="Keyboard Gaming" gambar={img5} harga="Rp 3.950.000,-" />{" "}
      <Products nama="Apple Macbook M2" gambar={img6} harga="Rp 15.250.000,-" />{" "}
      <Products nama="Realme NEO GT5" gambar={img7} harga="Rp 12.899.000,-" />{" "}
      <Products nama="Asus ROG Phone 7" gambar={img8} harga="Rp 8.490.000,-" />
    </div>
  );
};

export default Main;
