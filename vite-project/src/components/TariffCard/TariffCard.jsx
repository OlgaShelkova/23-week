import React from "react";
import "./TariffCard.scss";

function TariffCard({ tariff }) {
  function getCardClass() {
    let className = "tariff-card";
    if (tariff.isSelected) {
      className += " selected";
    }
    return className;
  }

  function getNameStyle() {
    return {
      backgroundColor: tariff.name.backgroundColor,
    };
  }

  function getPriceStyle() {
    return {
      backgroundColor: tariff.price.backgroundColor,
    };
  }

  return (
    <div className={getCardClass()}>
      <h2 className="name" style={getNameStyle()}>
        {tariff.name.text}
      </h2>
      <div className="price-container">
        <h1 className="price" style={getPriceStyle()}>
          <span className="currency">руб</span>
          <span className="price-amount">{tariff.price.value}</span>
          <span className="time">/мес</span>
        </h1>
      </div>
      <p className="speed">{tariff.speed.value} Мбит/с</p>
      <p className="traffic">{tariff.traffic.text}</p>
    </div>
  );
}

export default TariffCard;
