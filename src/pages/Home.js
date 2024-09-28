import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import { fetchApi } from "../apiRequest/fetchApi";
import Main from "../component/Main";
import Navbar from "../component/Navbar";

function Home() {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState("Home");
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selected}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error("Error fetching videos:", error));
  }, [selected]);

  return (
    <>
      <Navbar />
      <div className="text-white font-extrabold bg-black mt-[5px]  flex ">
        <div className="sm:flex-[1] overflow-x-scroll ">
          <Sidebar selected={selected} setSelected={setSelected} />
        </div>
        <div className="flex-[1] sm:flex-[5]">
          <p className=""> Your search {selected} videos</p>
          <div>
            <Main videos={videos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
