import { useDispatch } from "react-redux";
import { PropertyTypes, Tenant } from "../types";
import { getTenants } from "../redux/features/tenantSlice";

type PropertyCardProps = {
  property: PropertyTypes;
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  const dispatch = useDispatch();

  // Handle Selected Property
  const selectedProperty = (tenants: Tenant[]) => {
    dispatch(getTenants(tenants));
  };
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-semibold">{property.type}</h2>
      <p>Address: {property.address}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Rent: ${property.rent}</p>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => selectedProperty(property.tenants)}
          className="px-3 py-1 mx-auto font-bold text-white bg-blue-400 rounded hover:bg-blue-300"
        >
          See Tenants
        </button>
        <button className="px-3 py-1 mx-auto font-bold text-white bg-blue-400 rounded hover:bg-blue-300">
          + Add Tenant
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
