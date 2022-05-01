import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RouteConfig from "./config/RouteConfig";

function App() {
  return (
    <div>
      <Header />
      <RouteConfig />
      <Footer />
    </div>
  );
}

export default App;
