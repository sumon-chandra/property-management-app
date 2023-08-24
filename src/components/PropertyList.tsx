import { useSelector, useDispatch } from "react-redux";
import { useEffect, FC } from "react";
import { InitialPropertyTypes, PropertyTypes } from "../types";
import { fetchProperties } from "../redux/features/propertySlice";
import { store } from "../redux/app/store";

interface PropertyListProps {
  onSelectProperty: (property: PropertyTypes) => void;
}

// Type definitions for Dispatch
type AppDispatch = typeof store.dispatch;

const PropertyList: FC<PropertyListProps> = ({ onSelectProperty }) => {
  const dispatch = useDispatch<AppDispatch>();

  // Get all fetched properties and their status
  const { properties, status } = useSelector(
    (state: InitialPropertyTypes) => state
  );

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  if (status === "loading") {
    return <p className="text-3xl font-bold text-blue-400">Loading...</p>;
  } else if (status === "failed") {
    return <p className="text-3xl font-bold text-red-400">Failed to load!!</p>;
  } else if (status === "success") {
    return (
      <div className="grid grid-cols-2 gap-4">
        {properties?.map((property: PropertyTypes) => (
          <div key={property.id} className="p-4 bg-white rounded shadow-lg">
            <h2 className="text-xl font-semibold">{property.type}</h2>
            <p>Address: {property.address}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Rent: ${property.rent}</p>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => onSelectProperty(property)}
                className="px-3 py-1 mx-auto font-bold text-white bg-blue-400 rounded hover:bg-blue-300"
              >
                See Tenants
              </button>
              <button className="px-3 py-1 mx-auto font-bold text-white bg-blue-400 rounded hover:bg-blue-300">
                + Add Tenant
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default PropertyList;
