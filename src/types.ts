export interface PropertyTypes {
  id: number;
  address: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  square_feet: number;
  rent: number;
  tenants: Tenant[];
}

export interface Tenant {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  start_date: string;
  end_date?: (null | string)[];
}

export type InitialPropertyTypes = {
  properties: PropertyTypes[];
  status: "loading" | "success" | "failed" | "idle";
};
export type InitialTenantTypes = {
  tenants: Tenant[];
};

export interface RootState {
  properties: InitialPropertyTypes;
  tenants: InitialTenantTypes;
}
