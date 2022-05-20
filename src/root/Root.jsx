import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { navbar } from "../utils/navbar";
import Container from "./Style";

export default function Root() {
  return (
    <Container>
      <Routes>
        {navbar.map(({ id, path, Element, hidden }) => {
          return hidden && <Route key={id} path={path} element={Element} />;
        })}
        <Route element={<Navbar />}>
          {navbar.map(({ id, path, Element, hidden }) => {
            return !hidden && <Route key={id} path={path} element={Element} />;
          })}
          <Route path="/" element={<Navigate to="/home" />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Container>
  );
}
