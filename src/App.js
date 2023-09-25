import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Offer from "./components/offer/Offer";
import Specialists from "./components/specialists/Specialists";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Specialists />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;
