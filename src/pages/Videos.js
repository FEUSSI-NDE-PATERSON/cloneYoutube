import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../component/Navbar";
import ReactPlayer from "react-player";
import Main from "../component/Main";
import { fetchApi } from "../apiRequest/fetchApi";
function Videos() {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchApi(
      `search?relatedToVideoId=${id.substring(
        1
      )}&part=snippet&type=video&maxResults=5`
    )
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className=" flex-[0.9] sm:flex-[0.6]">
        <ReactPlayer
          width="100%"
          height="500px"
          controls={true}
          url={`https://www.youtube.com/watch?v=${id.substring(1)}`}
        />
        <div className="text-center ">
          <p>Recommended Videos</p>
          <Main videos={videos} mt="50px" />
        </div>
      </div>
    </div>
  );
}

export default Videos;
