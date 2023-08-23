import { PropertyTypes } from "../types";
interface PropertyDetailsProps {
  properties: PropertyTypes;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ properties }) => {
  return (
    <div className="fixed p-6 bg-white rounded shadow-lg w-96 right-4 top-4">
      <h2 className="text-xl font-semibold">Property Details</h2>
      <h3 className="text-lg font-medium">Tenants:</h3>
      <ul className="ml-6 list-disc">
        {properties.tenants.map((tenant) => (
          <li key={tenant.id}>
            {tenant.name} {tenant.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyDetails;
