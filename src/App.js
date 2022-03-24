import { useEffect } from "react";
import filmApi from "./api/fillmApi";
import "./App.scss";
import RouteConfig from "./config/RouteConfig";

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
      <RouteConfig />
    </div>
  );
}

export default App;
