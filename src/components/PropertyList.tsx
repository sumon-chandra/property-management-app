import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { PropertyTypes, RootState } from "../types";
import { fetchProperties } from "../redux/features/propertySlice";
import { store } from "../redux/app/store";
import PropertyCard from "./PropertyCard";

// Type definitions for Dispatch
type AppDispatch = typeof store.dispatch;

const PropertyList = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get all fetched properties and their status
  const { properties, status } = useSelector(
    (state: RootState) => state.properties
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
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>
    );
  }
};

export default PropertyList;
