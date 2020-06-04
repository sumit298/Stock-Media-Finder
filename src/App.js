import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import ImageList from "./components/imageList";
import "./App.css";
import Search from "./components/search";
import VideoList from "./components/videolist";
import { BrowserRouter as Router, Route } from "react-router-dom";
const sstk = require("shutterstock-api");

function App() {
  const [videos, setVideos] = useState([]);
  const [image, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [searchClick, setSearchClick] = useState("");
  const [select, setSelect] = useState(10);
  const api = "https://pixabay.com/api/";

  const apiKey = `${process.env.REACT_APP_APIKEY}`;
  useEffect(() => {
    getPhotos();
    videosApi
      .searchVideos(queryParams)
      .then((data) => {
        console.log(data.data);
        setVideos(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchClick, select]);

  const getPhotos = async () => {
    const response = await fetch(
      `${api}?key=${apiKey}&q=${search}&image_type=photo&per_page=${select}&safesearch=true`
    );
    const data = await response.json();
    // console.log(data.hits);
    setImages(data.hits);
  };

  const applicationConsumerId = "cbthUPvvXomxCestnBVQHuaKKTfq1RTh";
  const applicationConsumerSecret = "Srgi6bMuwJDducdK";
  sstk.setBasicAuth(applicationConsumerId, applicationConsumerSecret);
  const videosApi = new sstk.VideosApi();

  const queryParams = {
    query: search,

    per_page: select,
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
      <Router>
        <Navbar />
        <Search
          search={search}
          select={select}
          SelectHandle={onSelectChange}
          SearchHandle={onSearchTextChange}
          clickSearch={searchClick}
          clickSearchFunction={onClickSearchTextChange}
        />
        <Route path="/videos">
          <VideoList videos={videos}/>;
        </Route>
        {<Route path="/" exact>
          <ImageList images={image} />
        </Route> } 
       
      </Router>
    </div>
  );
}

export default App;
