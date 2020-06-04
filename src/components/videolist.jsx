import React  from "react";
import Video from './video'



const VideoList = ({videos}) => {
  

  return (
    <div className="display">
      {videos.map((item) => {
        return (
          <div key={item.id}>
            <Video item = {item}/>
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
