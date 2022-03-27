import Header from "./components/header/Header";
import "./App.scss";
import RouteConfig from "./config/RouteConfig";
import Footer from "./components/footer/Footer";

function App() {
  if (process.env.NODE_ENV === "production")
    console.log = function no_console() {};
  return (
    <div>
      <Header />
      <RouteConfig />
      <Footer />
    </div>
  );
}

export default App;
