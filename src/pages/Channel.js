import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchApi } from "../apiRequest/fetchApi";
import Main from "../component/Main";
import Navbar from "../component/Navbar";
function Channel() {
  const { id } = useParams();
  const [channels, setChannels] = useState();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // fetching the channel statistics
    fetchApi(`channels?part=statistics&id=${id.substring(1)}`)
      .then((data) => {
        setChannels(data.items[0]);
      })
      .catch((error) => console.error("Error fetching videos:"));

    // fetch the channel  video
    fetchApi(
      `search?channelId=${id.substring(
        1
      )}&part=snippet&order=date&maxResults=50`
    )
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => console.error("Error fetching videos:"));
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="text-white  ">
        <div className=" mx-auto flex flex-col items-center pt-[25px]">
          <img
            src={channels?.snippet?.thumbnails?.default?.url}
            className="rounded-full  w-32 h-32"
            alt="error"
          />
          <div className="text-white text-center text-xs mt-2 ">
            <p>{channels?.snippet?.title}</p>
            <p>{channels?.statistics?.subscriberCount} subscribe</p>
          </div>
        </div>
        <div className="mt-[12px] bg-black">
          <Main videos={videos} />
        </div>
      </div>
    </>
  );
}

export default Channel;
