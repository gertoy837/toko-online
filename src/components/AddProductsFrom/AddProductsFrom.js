import React, { useState } from "react";
import "./AddProductsFrom.css";

const AddProductsFrom = ({ onAddFruit }) => {
  const [fruitsData, setFruitsData] = useState({
    nama: "",
    harga: "",
    berat: "",
    gambar: "",
    terjual: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFruitsData({
      ...fruitsData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFruit(fruitsData);
  };

  return (
    <div className="containerFruits">
      <section className="form">
        <div class="form-left">
          <p>Review Gambar</p>
          <img
            src={
              fruitsData.gambar ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfc3K_4m8sEamUqTm98dcCtBQ1pq9U3ZqCTg&usqp=CAU"
            }
            alt="img-form"
            className="form-image"
          />
          <p>Contoh Gambar</p>
        </div>
        <div class="form-right">
          <h1 class="form-title">Add Fruit</h1>
          <form onSubmit={handleSubmit}>
            <div class="form-inputgroup">
              <label htmlFor="nama" className="form-label">
                Nama
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div class="form-inputgroup">
              <label htmlFor="harga" className="form-label">
                Harga
              </label>
              <input
                type="number"
                name="harga"
                id="harga"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div class="form-inputgroup">
              <label htmlFor="berat" className="form-label">
                Berat
              </label>
              <input
                type="text"
                name="berat"
                id="berat"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div class="form-inputgroup">
              <label htmlFor="gambar" className="form-label">
                Gambar
              </label>
              <input
                type="text"
                name="gambar"
                id="gambar"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div class="form-inputgroup">
              <label htmlFor="terjual" className="form-label">
                Terjual
              </label>
              <input
                type="text"
                name="terjual"
                id="terjual"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <button className="form-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProductsFrom;
