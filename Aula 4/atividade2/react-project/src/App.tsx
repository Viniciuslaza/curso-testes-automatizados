import React from "react";
import Form from "./principalView/Form";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import List from "./listView/ListSkills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="list/*" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
