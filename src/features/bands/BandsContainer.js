import React from "react";
import { useSelector } from "react-redux";
import BandInput from "./BandInput";

function BandsContainer() {
  const bandNames = useSelector((state) => state.bands.entities);

  return (
    <div>
      <BandInput />
      <ul>
        {bandNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BandsContainer;
