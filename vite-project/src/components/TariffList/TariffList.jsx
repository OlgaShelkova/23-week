import React, { useState } from "react";
import TariffCard from "../TariffCard/TariffCard";
import "./TariffList.css";
import { tariffs } from "../../data";

const TariffList = () => {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleTariffSelect = (tariffId) => {
    const selected = tariffs.find((tariff) => tariff.id === tariffId);
    setSelectedTariff(selected);
  };

  return (
    <div className="tariff-list">
      {tariffs.map((tariff) => (
        <TariffCard
          key={tariff.id}
          tariff={tariff}
          onTariffSelect={handleTariffSelect}
        />
      ))}
      {selectedTariff && (
        <div className="selected-tariff">
          <h3>Выбранный тариф:</h3>
          <p>{selectedTariff.name.text}</p>
        </div>
      )}
    </div>
  );
};

export default TariffList;
