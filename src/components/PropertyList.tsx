import React, { useEffect, useState } from "react";
import { PropertyTypes } from "../types";
// import { properties } from "../data";

interface PropertyListProps {
  onSelectProperty: (property: PropertyTypes) => void;
}

const PropertyList: React.FC<PropertyListProps> = ({ onSelectProperty }) => {
  const [properties, setProperties] = useState([]);

  const fetchPropertyList = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    setProperties(data);
  };

  useEffect(() => {
    fetchPropertyList();
  }, []);
  return (
    <div className="grid grid-cols-2 gap-4">
      {properties?.map((property: PropertyTypes) => (
        <div
          key={property.id}
          className="p-4 bg-white rounded cursor-pointer"
          onClick={() => onSelectProperty(property)}
        >
          <h2 className="text-xl font-semibold">{property.address}</h2>
          <p>Rooms: {property.address}</p>
          <p>Type: {property.type}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Rent: ${property.rent}</p>
          <button className="w-full py-1 mx-auto mt-4 font-bold text-white bg-blue-400 rounded hover:bg-blue-300">
            See Tenants
          </button>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
