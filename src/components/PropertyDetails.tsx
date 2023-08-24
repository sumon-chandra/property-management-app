import { PropertyTypes } from "../types";
interface PropertyDetailsProps {
  properties: PropertyTypes;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ properties }) => {
  return (
    <div className="fixed p-6 bg-white rounded shadow-lg w-96 right-4 top-4">
      <h2 className="text-xl font-semibold text-center">Property Details</h2>
      <h3 className="text-sm font-medium">List of Tenants:</h3>
      <div className="mt-4 space-y-4">
        {properties.tenants.map((tenant) => (
          <div key={tenant.id} className="p-4 bg-blue-100 rounded shadow-inner">
            <h3>Name: {tenant.name}</h3>
            <p>Email: {tenant.email}</p>
            <p>Phone: +{tenant.phone_number}</p>
            <p>Starting Data: {tenant.start_date}</p>
            <p>
              Ending Data:{" "}
              {tenant.end_date === null ? "Running" : tenant.end_date}
            </p>
            <div className="flex justify-end gap-4 mt-2">
              <button className="px-3 py-1 text-xs font-semibold text-white bg-blue-400 rounded hover:bg-blue-300">
                Edit
              </button>
              <button className="px-3 py-1 text-xs font-semibold text-white bg-red-400 rounded hover:bg-red-300">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetails;
