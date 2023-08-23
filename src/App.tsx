import { useState } from "react";
import PropertyList from "./components/PropertyList";
import PropertyDetails from "./components/PropertyDetails";
import { PropertyTypes } from "./types";

function App() {
  const [selectedProperty, setSelectedProperty] =
    useState<PropertyTypes | null>(null);

  const handleSelectProperty = (property: PropertyTypes) => {
    setSelectedProperty(property);
  };

  return (
    <div className="flex items-start min-h-screen bg-blue-100">
      <div className="w-full p-4">
        <h1 className="mb-4 text-2xl font-semibold">Property Management App</h1>
        <div className="grid grid-cols-2 gap-4">
          <PropertyList onSelectProperty={handleSelectProperty} />
          {selectedProperty && (
            <PropertyDetails properties={selectedProperty} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
