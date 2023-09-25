import "./OfferItem.css";

export default function OfferItem({ offer }) {
  return (
    <div className="offer-item">
      <h2 className="offerName">{offer.name}</h2>
      {offer.isNew ? <span className="new-offer">(nowość)</span> : null}
      {offer.isNew ? <div className="dot"></div> : null}
    </div>
  );
}
