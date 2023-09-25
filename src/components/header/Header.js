import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="headerShadow">
        <div className="headerContainer container">
          <h2 className="bigHeaderText">
            Nasza firma oferuje najwyższej jakości produkty.
          </h2>
          <h2 className="smallHeaderText">Nie wierz nam na słowo - sprawdź</h2>
          <a href="#offer" className="btnOfert">
            oferta
          </a>
        </div>
      </div>
    </header>
  );
}
