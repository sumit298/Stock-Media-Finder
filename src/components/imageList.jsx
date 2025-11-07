/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Image from "./image";
import ImageSkeleton from "./imageSkeleton";
import Search from "./search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
    justifyContent: "space-around",
  },
}));


const ImageList = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchClick, setSearchClick] = useState("");
  const [select, setSelect] = useState(10);
  const [category, setCategory] = useState("all");
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

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const onKeyPressHandle = (e)=>{
    if (e.charCode === 13) {
      e.preventDefault();
      // console.log("I am clicked");
      onClickSearchTextChange();
    }
  }

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      const apiKey = `${process.env.REACT_APP_APIKEY}`;
      const imageType = category === 'all' ? '' : `&image_type=${category}`;
  
      const response = await fetch(
        `${api}?key=${apiKey}&q=${search}${imageType}&per_page=${select}&safesearch=true`
      );
      const data = await response.json();
      setImages(data.hits);
      setLoading(false);
    };
    getPhotos();
  }, [searchClick, select, category]);

  return (
    <div>
      <Search
        search={search}
        select={select}
        category={category}
        SelectHandle={onSelectChange}
        CategoryHandle={onCategoryChange}
        SearchHandle={onSearchTextChange}
        clickSearch={searchClick}
        clickSearchFunction={onClickSearchTextChange}
        onKeyPressHandle={onKeyPressHandle}
      />
      <div className={classes.container}>
        {loading ? (
          Array.from({ length: select }, (_, index) => (
            <ImageSkeleton key={index} />
          ))
        ) : (
          images.map((item) => (
            <Image key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default ImageList;
