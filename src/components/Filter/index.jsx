import React, { useRef, useState } from "react";
import { Button, Input } from "../Generic";
import { Container, Wrapper, Icon, Advanced, Select } from "./style";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import UseReplace from "../../hooks/useReplace";
import { useQuery } from "react-query";

const { REACT_APP_BASE_URL: url } = process.env;

export default function Filter() {


  const query = useSearch();
  const navigate = useNavigate();

  const countryRef = useRef("");
  const cityRef = useRef("");
  const regionRef = useRef("");
  const zipCodeRef = useRef("");
  const roomRef = useRef("");
  const maxPriceRef = useRef("");
  const minPriceRef = useRef("");
  const sizeRef = useRef("");
  const sortRef = useRef("");

  const fetchData = () => {
    return fetch(`${url}/v1/categories/list`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  };
  const [list, setList] = useState([]);
  useQuery("getCtgList", fetchData, {
    onSuccess: (res) => setList(res?.data || []),
  });
  const [selectedCtg] = list?.filter(
    (a) => a?.id === +query.get("category_id")
  );

  const onChange = () => {
    navigate(`${UseReplace("country", countryRef.current.value)}`);
    navigate(`${UseReplace("city", cityRef.current.value)}`);
    navigate(`${UseReplace("region", regionRef.current.value)}`);
    navigate(`${UseReplace("zipCode", zipCodeRef.current.value)}`);
    navigate(`${UseReplace("room", roomRef.current.value)}`);
    navigate(`${UseReplace("maxPrice", maxPriceRef.current.value)}`);
    navigate(`${UseReplace("minPrice", minPriceRef.current.value)}`);
    navigate(`${UseReplace("size", sizeRef.current.value)}`);
    navigate(`${UseReplace("sort", sortRef.current.value)}`);
  };

  const onClear = () => {
    countryRef.current.value = "";
    cityRef.current.value = "";
    regionRef.current.value = "";
    zipCodeRef.current.value = "";
    roomRef.current.value = "";
    maxPriceRef.current.value = "";
    minPriceRef.current.value = "";
    sizeRef.current.value = "";
    sortRef.current.value = "";

    navigate(`/properties`);
  };

  const onSelect = (e) => {
    console.dir(e.target);
    let id = "";
    e.target.childNodes.forEach((item, index) => {
      if (item.value === e.target.value) id = item.id;
    });

    navigate(`${UseReplace("category_id", id)}`);
  };
  const content = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Advanced.Section>
        <Input
          placeholder={"Country"}
          ref={countryRef}
          defaultValue={query.get("country")}
          onChange={onChange}
          name="country"
        />
        <Input
          placeholder={"Region"}
          ref={regionRef}
          defaultValue={query.get("region")}
          onChange={onChange}
          name="region"
        />
        <Input
          placeholder={"City"}
          ref={cityRef}
          defaultValue={query.get("city")}
          onChange={onChange}
          name="city"
        />
        <Input
          placeholder={"Zip Code"}
          ref={zipCodeRef}
          defaultValue={query.get("zipCode")}
          onChange={onChange}
          name="zip_code"
        />
      </Advanced.Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Advanced.Section>
        <Input
          placeholder={"Room"}
          ref={roomRef}
          defaultValue={query.get("room")}
          onChange={onChange}
          name="room"
        />
        <Input
          placeholder={"Size"}
          ref={sizeRef}
          defaultValue={query.get("size")}
          onChange={onChange}
          name="size"
        />
        <Input
          placeholder={"Sort"}
          ref={sortRef}
          defaultValue={query.get("sort")}
          onChange={onChange}
          name="sort"
        />
      </Advanced.Section>
      <Advanced.Title>Price</Advanced.Title>
      <Advanced.Section>
        <Input
          placeholder={"Min price"}
          ref={minPriceRef}
          defaultValue={query.get("minPrice")}
          onChange={onChange}
          name="min_price"
        />
        <Input
          placeholder={"Max price"}
          ref={maxPriceRef}
          defaultValue={query.get("maxPrice")}
          onChange={onChange}
          name="max_price"
        />
        <Select value={selectedCtg?.name} onChange={onSelect}>
          {list?.map((item) => {
            return (
              <option id={item.id} value={item.name} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </Select>
        {/* <Select
          value={selectedCtg?.name}
          defaultValue={"default"}
          onChange={onSelect}
        >
          <option value={"default"}>{selectedCtg?.name}</option>;
          {list?.map((item) => {
            return (
              item.name !== selectedCtg?.name && (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              )
            );
          })}
        </Select> */}
      </Advanced.Section>
      <Advanced.Section>
        {/* <Button  width={'128px'} type={'secondary'} >Cancel</Button> */}
        <Button onClick={onClear} width={"128px"} type={"primary"}>
          Clear
        </Button>
      </Advanced.Section>
    </Advanced>
  );
  return (
    <Container>
      <Wrapper>
        {/* Input */}
        <Input
          pl={"50px"}
          type="text"
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        >
          {<Icon.Home />}
        </Input>
        {/* Settings button */}
        <Popover placement="bottomRight" content={content} trigger="click">
          <Button width={"131px"} type="secondary">
            <Icon.Settings />
            Advanced
          </Button>
        </Popover>
        {/* Search button */}
        <Button width={"180px"} type="primary">
          <Icon.Search /> Search
        </Button>
      </Wrapper>
    </Container>
  );
}
