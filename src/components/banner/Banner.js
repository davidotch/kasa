import React from "react";
// import "../style/banner.css";

export function Banner() {
  return (
    <div className="banner">
      <img
        src={require("../../assets/headerImg.png")}
        alt="paysage mêlant mer et montagne"
      />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}