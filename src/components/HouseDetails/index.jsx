import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Container } from "./style";

import ImgsBox from "./ImgsBox";
import LuxaryMain from "./LuxaryMain";
import SimilarListenings from "./SimilarListings";

const { REACT_APP_BASE_URL: url } = process.env;

export const HouseDetails = () => {
  const [house, setHouse] = useState();
  const params = useParams();

  useQuery(
    "getHouseById",
    () => {
      return fetch(`${url}/v1/houses/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setHouse(res?.data);
      },
      keepPreviousData: true, // oldingi malumotni saqlab turadi
      refetchOnWindowFocus: false, // sahifaga o'tganda malumot olib kelish
    }
  );

  return (
    <Container>
      <ImgsBox />
      <LuxaryMain house={house} />
      {/* Similar listings */}
      <SimilarListenings />
    </Container>
  );
};

export default HouseDetails;
