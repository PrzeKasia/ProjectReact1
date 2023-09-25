import "./Specialists.css";

export default function Specialists() {
  return (
    <section className="specialists container" id="specialists">
      <div className="heading">Nasi specjaliści</div>
      <div className="specialist">
        <div className="fotoOne"></div>
        <div className="order">
          <p className="name">Imię Nazwisko [dział]</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            ducimus! Aperiam quae, rerum odit deserunt consequuntur maiores
            nostrum, commodi ex neque, voluptas dolorum quis laboriosam aliquid!
            Nihil tempore consequuntur inventore!
          </p>
        </div>
      </div>
      <div className="specialist">
        <div className="order">
          <p className="name">Imię Nazwisko [dział]</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            ducimus! Aperiam quae, rerum odit deserunt consequuntur maiores
            nostrum, commodi ex neque, voluptas dolorum quis laboriosam aliquid!
            Nihil tempore consequuntur inventore!
          </p>
        </div>
        <div className="fotoTwo"></div>
      </div>
    </section>
  );
}
