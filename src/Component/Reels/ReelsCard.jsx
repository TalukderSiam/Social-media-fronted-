import React from "react";

const ReelsCard = () => {
  return (
    <div className='w-[15rem] px-2'>
      <video
        className='w-full h-full'
        controls
       src="https://videos.pexels.com/video-files/5896379/5896379-sd_360_640_24fps.mp4"
      ></video>
    </div>
  );
};

export default ReelsCard;
