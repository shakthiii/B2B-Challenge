import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import styled from "styled-components";
import Loading from "./Loading";

function SearchBar({ search }) {
  const [data, setData] = useState([]);

  const keys = ["company", "website", "slug"];

  const dataSearch = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(search))
    );
  };
  useEffect(() => {
    doApiCall();
  }, [search]);

  async function doApiCall() {
    try {
      const res = await axios.get(`http://localhost:5000/?q=${search}`);
      setData(dataSearch(res.data));
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <AccountContent>
      {data.length <= 0 ? (
        <Loading />
      ) : (
        data.map((data, i) => (
          <div key={i}>
            <Cards data={data} />
          </div>
        ))
      )}
    </AccountContent>
  );
}

const AccountContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5rem;
  padding: 2rem;
`;

export default SearchBar;
