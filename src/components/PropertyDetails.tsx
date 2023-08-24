// import { PropertyTypes } from "../types";

import { useSelector } from "react-redux";
import { RootState } from "../types";
import TenantCard from "./TenantCard";

const PropertyDetails = () => {
  const { tenants } = useSelector((state: RootState) => state.tenants);
  return (
    <div className="fixed p-6 bg-white rounded shadow-lg w-96 right-4 top-4">
      <h2 className="text-xl font-semibold text-center">Property Details</h2>
      <h3 className="text-sm font-medium">List of Tenants:</h3>
      <div className="mt-4 space-y-4">
        {tenants.map((tenant) => (
          <TenantCard tenant={tenant} key={tenant.id} />
        ))}
      </div>
    </div>
  );
};

export default PropertyDetails;
