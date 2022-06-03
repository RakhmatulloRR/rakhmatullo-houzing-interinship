import React, { useState } from "react";
import { Button, Input } from "../Generic";
import { Container, Wrapper, Icon, Advanced, Select } from "./style";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import UseReplace from "../../hooks/useReplace";
import { useQuery } from "react-query";

const { REACT_APP_BASE_URL: url } = process.env;

export const Settings = () => {
  const query = useSearch();
  const [state, setState] = useState({
    country: query.get("country"),
    city: query.get("city"),
    region: query.get("region"),
    zipCode: query.get("zipCode"),
    maxPrice: query.get("maxPrice"),
    minPrice: query.get("minPrice"),
    size: query.get("size"),
    sort: query.get("sort"),
  });
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [selectedCtg] = list?.filter((a) => a.id === +query.get("category_id"));

  useQuery(
    "getCtgList",
    () => {
      return fetch(`${url}/v1/categories/list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setList(res?.data || []);
      },
    }
  );

  const onChange = (e) => {
    const { value, name } = e.target;
    // navigate(`${pathname}?${name}=${value}`);
    navigate(`${UseReplace(name, value)}`);
    setState({ ...state, [name]: value });
  };

  const onClear = () => {
    setState({
      country: "",
      city: "",
      region: "",
      zipCode: "",
      maxPrice: "",
      minPrice: "",
      size: "",
      sort: "sort",
    });
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
          value={state.country}
          onChange={onChange}
          name="country"
        />
        <Input
          placeholder={"Region"}
          value={state.region}
          onChange={onChange}
          name="region"
        />
        <Input
          placeholder={"City"}
          value={state.city}
          onChange={onChange}
          name="city"
        />
        <Input
          placeholder={"Zip Code"}
          value={state.zip_code}
          onChange={onChange}
          name="zip_code"
        />
      </Advanced.Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Advanced.Section>
        <Input
          placeholder={"Room"}
          value={state.room}
          onChange={onChange}
          name="room"
        />
        <Input
          placeholder={"Size"}
          value={state.size}
          onChange={onChange}
          name="size"
        />
        <Input
          placeholder={"Sort"}
          value={state.sort}
          onChange={onChange}
          name="sort"
        />
      </Advanced.Section>
      <Advanced.Title>Price</Advanced.Title>
      <Advanced.Section>
        <Input
          placeholder={"Min price"}
          value={state.minPrice}
          onChange={onChange}
          name="min_price"
        />
        <Input
          placeholder={"Max price"}
          value={state.maxPrice}
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
};

export default Settings;
