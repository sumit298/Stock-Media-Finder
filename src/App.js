import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import ImageList from "./components/imageList";
import "./App.css";
import Search from "./components/search";


function App() {
  const [image, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [searchClick, setSearchClick] = useState('');
  const [select, setSelect] = useState(10);
  const api = "https://pixabay.com/api/";
  const apiKey = `${process.env.REACT_APP_APIKEY}`;
  useEffect(() => {
    getPhotos();
  }, [searchClick, select]);

  const getPhotos = async () => {
    const response = await fetch(
      `${api}?key=${apiKey}&q=${search}&image_type=photo&per_page=${select}&safesearch=true`
    );
    const data = await response.json();
    // console.log(data.hits);
    setImages(data.hits);
  };
  const onSearchTextChange = (e) => {
    setSearch(e.target.value);
  };

  const onClickSearchTextChange = () => {
    setSearchClick(search);
  };
  const onSelectChange = (e) => {
    setSelect(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <Search
        search={search}
        select={select}
        SelectHandle={onSelectChange}
        SearchHandle={onSearchTextChange}
        clickSearch={searchClick}
        clickSearchFunction={onClickSearchTextChange}
      />
      
      (<ImageList images={image} />)
    </div>
  );
}

export default App;
