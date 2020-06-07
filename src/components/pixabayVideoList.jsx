import React, { useState, useEffect } from "react";
import PixabayVideo from './pixabayVideos'
import Search from "./search";

const PixabayVideoList = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [searchClick, setSearchClick] = useState("");
  const [select, setSelect] = useState(10);
  const api = "https://pixabay.com/api/videos/";

  const onSearchTextChange = (e) => {
    setSearch(e.target.value);
  };

  const onClickSearchTextChange = () => {
    setSearchClick(search);
  };
  const onSelectChange = (e) => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    const getVidoes = async () => {
      const apiKey = `${process.env.REACT_APP_APIKEY}`;

      const response = await fetch(
        `${api}?key=${apiKey}&q=${search}&per_page=${select}`
      );
      const data = await response.json();
      console.log(data.hits);
      setVideos(data.hits);
    };
    getVidoes();
  }, [search, select]);
  return (
    <div>
      <Search
        search={search}
        select={select}
        SelectHandle={onSelectChange}
        SearchHandle={onSearchTextChange}
        clickSearch={searchClick}
        clickSearchFunction={onClickSearchTextChange}
      />
      <div className="display">
        {videos.map((item) => {
          return (
            <div key={item.id}>
              <PixabayVideo item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PixabayVideoList;
