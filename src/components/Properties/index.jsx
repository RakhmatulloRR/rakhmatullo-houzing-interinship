import React, { useState } from "react";
import Filter from "../Filter";
import { Select } from "antd";
import Card from "../Card";
import { useQuery } from "react-query";
import { Button } from "../Generic";
import { useLocation, useNavigate } from "react-router-dom";
import UseSearch from "../../hooks/useSearch";
import { Body, Container, CountWrapper, Wrapper } from "./style";

const { REACT_APP_BASE_URL: url } = process.env;
const { Option } = Select;

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
        <div className="title">{data[0]?.category.name || "Proporties"}</div>
        <div className="description">
          Siz orzu qilgan, siz izlagan shinam va arzon uylar.
        </div>
        <CountWrapper>
          <div className="description">{data?.length || 0} results</div>
          <CountWrapper.Sort
            defaultValue="Sort by: Newest Listings"
            style={{ width: 250 }}
          >
            <Option value="jack">Sort by: Newest Listings</Option>
            <Option value="lucy">Sort by: Oldest Listings</Option>
            <Option value="disabled">Sort by: Expensive Listings</Option>
            <Option value="Yiminghe">Sort by: Cheap Listings</Option>
          </CountWrapper.Sort>
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
