import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Offer from "./components/Offer/Offer";
import Specialists from "./components/Specialists/Specialists";

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
