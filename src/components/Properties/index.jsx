import React, { useState } from "react";
import Filter from "../Filter";
import Card from "../Card";
import { useQuery } from "react-query";
import { Button } from "../Generic";
import { useLocation, useNavigate } from "react-router-dom";
// import UseSearch from "../../hooks/useSearch";
import { Body, Container, CountWrapper, Sort, Wrapper } from "./style";

const { REACT_APP_BASE_URL: url } = process.env;

export const ProportiesComponent = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { search } = location;
  //   const query = useSearch();
  const navigate = useNavigate();
  useQuery(
    ["getHousesList", search],
    () => {
      return fetch(`${url}/v1/houses/list${search}`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res?.data || []);
      },
    }
  );
  const onSelect = (id) => {
    navigate(`/properties/${id}`); // bu jo'natilgan malumot params orqali tutib olinadi
  };

  return (
    <Container>
      <Filter />
      <Wrapper>
        <div className="title">{data[0]?.category?.name || "Proporties"}</div>
        <div className="description">
          Siz orzu qilgan, siz izlagan shinam va arzon uylar.
        </div>
        <CountWrapper>
          <div className="description">{data?.length || 0} results</div>
          <Sort>
            <option className="option" value="0">Sort By: Newest Listings</option>
            <option className="option" value="1">Newest Listings</option>
            <option className="option" value="2">Newest Listings</option>
            <option className="option" value="3">Newest Listings</option>
            <option className="option" value="4">Newest Listings</option>

          </Sort>
        </CountWrapper>
        <Body>
          {data?.map((value) => (
            <Card
              onClick={() => onSelect(value?.id)}
              key={value?.id}
              info={value}
            />
          ))}
        </Body>
        <Button type={"primary"} width={"250px"} mt={48} mb={96}>
          Show more
        </Button>
      </Wrapper>
    </Container>
  );
};

export default ProportiesComponent;

// useReplace
// useSearch
// useRequest
