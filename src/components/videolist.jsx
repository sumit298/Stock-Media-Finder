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

  const applicationConsumerId = "cbthUPvvXomxCestnBVQHuaKKTfq1RTh";
  const applicationConsumerSecret = "Srgi6bMuwJDducdK";
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
