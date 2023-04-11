import React from "react";

export default function Footer() {
    return (
        <div className="footer">
      <div className="foot_Logo">
        <img
          src={require("../assets/logoBlk.png")}
          alt="Logo de l'agence Kasa avec le premier A en forme de maison"
        />
      </div>
      <div className="foot_copyright">
        <p>&#169; Kasa. All rights reserved</p>
      </div>
    </div>
    );
} 