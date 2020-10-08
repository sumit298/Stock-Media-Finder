/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Video from "./video";
import Search from "./search";
const sstk = require("shutterstock-api");

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [searchClick, setSearchClick] = useState("");
  const [select, setSelect] = useState(10);
  const onSearchTextChange = (e) => {
    setSearch(e.target.value);
  };
  
  

  const onClickSearchTextChange = () => {
    setSearchClick(search);
  };
  const onSelectChange = (e) => {
    setSelect(e.target.value);
  };
  const onKeyPressHandle = (e)=>{
    if (e.charCode === 13) {
      e.preventDefault();
      // console.log("I am clicked");
      onClickSearchTextChange();
    }
  }

  useEffect(() => {
    videosApi
      .searchVideos(queryParams)
      .then((data) => {
        // console.log(data);
        setVideos(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchClick, select]);

  const applicationConsumerId = `${process.env.REACT_APP_CONSUMER_ID}`;
  const applicationConsumerSecret = `${process.env.REACT_APP_CONSUMER_SECRET}`;
  sstk.setBasicAuth(applicationConsumerId, applicationConsumerSecret);
  const videosApi = new sstk.VideosApi();

  const queryParams = {
    query: search,

    per_page: select,
  };

  return (
    <div>
      <Search
        search={search}
        select={select}
        SelectHandle={onSelectChange}
        SearchHandle={onSearchTextChange}
        clickSearch={searchClick}
        clickSearchFunction={onClickSearchTextChange}
        onKeyPressHandle={onKeyPressHandle}
      />
      <div className="display">
        {videos.map((item) => {
          return (
            <div key={item.id}>
              <Video item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
