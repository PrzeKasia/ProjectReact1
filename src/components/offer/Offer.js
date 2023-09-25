import "./Offer.css";
import OfferItem from "./OfferItem";

const offers = [
  { name: "Usługa 1", isNew: true },
  { name: "Usługa 2", isNew: false },
  { name: "Usługa 3", isNew: false },
  { name: "Usługa 4", isNew: false },
  { name: "Usługa 5", isNew: false },
  { name: "Usługa 6", isNew: false },
];

export default function Offer() {
  return (
    <section className="offer" id="offer">
      <div className="containerOffer container">
        <h2 className="headerServices">Czym zajmuje się nasza firma?</h2>

        <div className="containerServices">
          {offers.map((offer, index) => (
            <OfferItem key={index} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
}
