import React, { useState, useEffect } from "react";
import Image from "./image";
import Search from "./search";


const ImageList = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [searchClick, setSearchClick] = useState("");
  const [select, setSelect] = useState(10);
  const api = "https://pixabay.com/api/";

  

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
    const getPhotos = async () => {
      const apiKey = `${process.env.REACT_APP_APIKEY}`;
  
      const response = await fetch(
        `${api}?key=${apiKey}&q=${search}&image_type=photo&per_page=${select}&safesearch=true`
      );
      const data = await response.json();
      // console.log(data.hits);
      setImages(data.hits);
    };
    getPhotos();
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
        {images.map((item) => {
          return (
            <div key={item.id}>
              <Image item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageList;
