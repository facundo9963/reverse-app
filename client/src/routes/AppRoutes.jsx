import React from "react";
import { Route, Routes } from "react-router-dom";
import InputBar from "../components/InputBar";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InputBar />} />
      </Routes>
    </>
  );
};

export default AppRoutes;