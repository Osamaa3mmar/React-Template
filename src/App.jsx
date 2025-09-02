import { Button } from "primereact/button";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "./NotFound.jsx";

export default function App() {
  const navigation = useNavigate();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Button
              onClick={() => {
                navigation("/osama");
              }}
              label="Osama"
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
