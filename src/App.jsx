import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="Home">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
