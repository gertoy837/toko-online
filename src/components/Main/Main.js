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
import Hero from "../Hero/Hero";
import AddProductsFrom from "../AddProductsFrom/AddProductsFrom";
import { useState } from "react";

const Main = () => {
  const datas = [
    {
      nama: "Kursi gaming Fantech",
      gambar: img1,
      harga: "Rp 2.350.000,-",
    },
    {
      nama: "POCO X6 Pro 5G",
      gambar: img2,
      harga: "Rp 4.999.000,-",
    },
    {
      nama: "SSD Seagate 1TB Gen 4",
      gambar: img3,
      harga: "Rp 2.450.000,-",
    },
    {
      nama: "Iphone 14 Pro Max",
      gambar: img4,
      harga: "Rp 24.450.000,-",
    },
    {
      nama: "Keyboard Gaming",
      gambar: img5,
      harga: "Rp 3.950.000,-",
    },
    {
      nama: "Apple Macbook M2",
      gambar: img6,
      harga: "Rp 15.250.000,-",
    },
    {
      nama: "Realme 10 Pro",
      gambar: img7,
      harga: "Rp 12.899.000,-",
    },
    {
      nama: "Asus ROG Phone 6",
      gambar: img8,
      harga: "Rp 8.490.000,-",
    },
  ];

  const [fruits, setFruits] = useState([
    {
      nama: "Apel",
      harga: 5000,
      berat: "200g",
      gambar: "https://umsu.ac.id/artikel/wp-content/uploads/2023/07/Apel.jpg",
      terjual: 73,
    },
    {
      nama: "Jeruk",
      harga: 7000,
      berat: "250g",
      gambar:
        "https://www.ruparupa.com/blog/wp-content/uploads/2021/10/Screen-Shot-2021-10-26-at-14.57.25-1024x653.png",
      terjual: 623,
    },
    {
      nama: "Pisang",
      harga: 3000,
      berat: "150g",
      gambar:
        "https://static.honestdocs.id/system/blog_articles/main_hero_images/000/004/500/original/iStock-636739634_%281%29.jpg",
      terjual: 378,
    },
    {
      nama: "Anggur",
      harga: 10000,
      berat: "300g",
      gambar:
        "https://res.cloudinary.com/dk0z4ums3/image/upload/v1693464270/attached_image/8-manfaat-anggur-merah-untuk-kesehatan.jpg",
      terjual: 415,
    },
    {
      nama: "Mangga",
      harga: 8000,
      berat: "180g",
      gambar:
        "https://www.astronauts.id/blog/wp-content/uploads/2023/04/Manfaat-Kesehatan-Buah-Mangga-yang-Mungkin-Belum-Kamu-Ketahui.jpg",
      terjual: 943,
    },
    {
      nama: "Strawberry",
      harga: 12000,
      berat: "100g",
      gambar:
        "https://www.puribundamalang.com/assets/images/photo/fakta-unik-strawberry123052019162904.jpg",
      terjual: 28,
    },
    {
      nama: "Semangka",
      harga: 15000,
      berat: "5000g",
      gambar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Watermeloen.jpg/800px-Watermeloen.jpg",
      terjual: 253,
    },
    {
      nama: "Nanas",
      harga: 6000,
      berat: "700g",
      gambar:
        "https://awsimages.detik.net.id/community/media/visual/2022/07/04/diet-nanas-bikin-bb-turun-1-kg-seminggu-apa-aman-untuk-kesehatan-3.jpeg?w=1200",
      terjual: 154,
    },
    {
      nama: "Kiwi",
      harga: 10000,
      berat: "120g",
      gambar:
        "https://duniasegar.com/wp-content/uploads/2020/07/30034.edt_-1202x800.jpg",
      terjual: 64,
    },
    {
      nama: "Durian",
      harga: 20000,
      berat: "1000g",
      gambar:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/03/17/manfaat-biji-durian-1952951229.jpeg",
      terjual: 86,
    },
  ]);

  const addFruit = (fruit) => {
    setFruits([...fruits, fruit]);
  };

  return (
    <div className="content">
      <Hero />
      <div className="main">
        {fruits.map((data) => {
          return (
            <Products
              nama={data.nama}
              gambar={data.gambar}
              harga={data.harga}
              berat={data.berat}
              terjual={data.terjual}
            />
          );
        })}
      </div>
      <AddProductsFrom onAddFruit={addFruit} />
    </div>
  );
};

export default Main;
