import React from "react";
import { Body, Container, Title } from "./style";
import Filter from "../Filter";
import { useQuery } from "react-query";
import HouseCard from "../HouseCard";
const { REACT_APP_BASE_URL: url } = process.env;
export default function Properties() {
  const { isLoading, data, isError, error } = useQuery(["getHomeList"], () => {
    return fetch(`${url}/api/v1/houses/list`)
      .then((res) => res.json())
      .then((res) => res.dataList[0] || []);
  });
  console.log(data);
  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (isError) {
    return <h2>{error.message}</h2>;
  } else {
    return (
      <Container>
        <Filter />
        <div className="title center">Proporties</div>
        <div className="description center">
          Siz orzu qilgan, siz izlagan shinam va arzon uylar.
        </div>
        <Title className="description">
          Total: <div className="subTitle">{""}</div>{" "}
        </Title>
        <Body>
        {data.length ? (
          data.map((uy, index) => {
            return <HouseCard key={index} info={uy} />;
          })
        ) : (
          <div className='title center'>No Data Found</div>
        )}
        </Body>
      </Container>
    );
  }
}
