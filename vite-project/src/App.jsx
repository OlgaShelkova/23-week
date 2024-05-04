import "./style/App.css";
import TariffList from "./components/TariffList/TariffList.jsx";
import { tariffs } from "./data";

function App() {
  return (
    <div className="app">
      <h1>Список тарифов</h1>
      <TariffList tariffs={tariffs} />
    </div>
  );
}

export default App;
