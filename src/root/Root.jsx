import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Contacts from "../pages/Contacts/Contacts";
import Main from "../pages/Main/Main";
import Proporties from "../pages/Proporties/Proporties";
import Container from "./Style";

export default function Root() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navbar/>}>
           <Route path="/home" element={<Main/>}/>
           <Route path="/proporties" element={<Proporties/>}/>
           <Route path="/contacts" element={<Contacts/>}/>
        </Route>
      </Routes>
    </Container>
  );
}
