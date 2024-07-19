import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

const App = () => {
  const [formData, setFormData] = useState(null);

  return (
    <div>
      {formData ? (
        <DisplayData data={formData} />
      ) : (
        <Form setFormData={setFormData} />
      )}
    </div>
  );
};

export default App;
