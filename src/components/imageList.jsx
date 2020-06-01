import React  from "react";
import Image from './image'



const ImageList = ({images}) => {
  

  return (
    <div className="display">
      {images.map((item) => {
        return (
          <div key={item.id}>
            <Image item = {item}/>
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
