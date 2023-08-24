import { Tenant } from "../types";

type TenantPropsTypes = {
  tenant: Tenant;
};

const TenantCard = ({ tenant }: TenantPropsTypes) => {
  return (
    <div key={tenant.id} className="p-4 bg-blue-100 rounded shadow-inner">
      <h3>Name: {tenant.name}</h3>
      <p>Email: {tenant.email}</p>
      <p>Phone: +{tenant.phone_number}</p>
      <p>Starting Data: {tenant.start_date}</p>
      <p>
        Ending Data: {tenant.end_date === null ? "Running" : tenant.end_date}
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
  );
};

export default TenantCard;
