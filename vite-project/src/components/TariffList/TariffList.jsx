import React from "react";
import TariffCard from "../TariffCard/TariffCard";
import "./TariffList.css";
import { tariffs } from "../../data";

const TariffList = () => {
  return (
    <div className="tariff-list">
      {tariffs.map((tariff) => (
        <TariffCard key={tariff.id} tariff={tariff} />
      ))}
    </div>
  );
};

export default TariffList;
