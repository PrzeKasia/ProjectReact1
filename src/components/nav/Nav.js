import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="navContainer container">
        <div className="my">moja firma</div>
        <ul className="list">
          <li className="item">
            <a href="#specialists">o nas</a>
          </li>
          <li className="item">
            <a href="#offer">oferta</a>
          </li>
          <li className="item">
            <a href="/#" className="disabled">
              kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
