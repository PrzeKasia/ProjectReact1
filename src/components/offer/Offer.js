import React from "react";
import "./Offer.css";

export default function Offer() {
  return (
    <section className="offer" id="offer">
      <div className="containerOffer container">
        <h2 className="headerServices">Czym zajmuje się nasza firma?</h2>

        <div className="containerServices">
          <div className="service">
            <p className="serviceOne">Usługa 1</p>
            <p className="novelty">(nowość)</p>
            <div className="dot"></div>
          </div>
          <div className="service">Usługa 2</div>
          <div className="service">Usługa 3</div>
          <div className="service">Usługa 4</div>
          <div className="service">Usługa 5</div>
          <div className="service">Usługa 6</div>
        </div>
      </div>
    </section>
  );
}
