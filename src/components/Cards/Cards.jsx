import React from "react";

function Cards({
  type,
  value,
  displayData,
  isActive,
  color,
  img_bg,
  img_element,
  cost,
  title,
  img_effect,
  hasEffect,
}) {
  return (
    <div
      className="cards-container"
      id={isActive ? "cards-flex" : null}
      onClick={displayData}
      style={{ backgroundImage: `${img_bg}` }}
    >
      <div className="cards-infos infos-top">
        <div
          className="cards-info"
          style={{ backgroundImage: `${img_element}` }}
        ></div>
        <div className="cards-cost">{cost}</div>
      </div>
      <div className="cards-text" style={{ backgroundColor: `${color}` }}>
        {type} {value}
      </div>

      <div className="cards-effect-container">
        <>
          <div className="cards-effect-text">Effect:</div>
          <div
            className="cards-effect"
            style={{ backgroundImage: `${img_effect}` }}
          ></div>
        </>
      </div>

      <div className="cards-title">{title}</div>
    </div>
  );
}

export default Cards;
