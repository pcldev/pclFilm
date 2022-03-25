import { useEffect } from "react";
import filmApi from "./api/fillmApi";
import Header from "./components/header/Header";
import "./App.scss";
import RouteConfig from "./config/RouteConfig";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    try {
      const fetchLeaderBoard = async () => {
        const response = await filmApi.getSearchLeaderBoard();
        console.log(response);
      };
      fetchLeaderBoard();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <Header />
      <RouteConfig />
      <Footer />
    </div>
  );
}

export default App;
