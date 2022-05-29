import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";

export const Root = () => {
  return (
    <Routes>
      {navbar.map(({ Element, path, id, hidden }) => {
        return hidden && <Route key={id} path={path} element={Element} />;
      })}

      {/* main */}
      <Route element={<Navbar />}>
        {navbar.map(({ Element, path, id, hidden }) => {
          return !hidden && <Route key={id} path={path} element={Element} />;
        })}
      </Route>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default Root;
