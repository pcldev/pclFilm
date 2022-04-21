import Header from "./components/header/Header";
import "./App.scss";
import RouteConfig from "./config/RouteConfig";
import Footer from "./components/footer/Footer";

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
