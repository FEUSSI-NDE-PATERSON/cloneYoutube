import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchApi } from "../apiRequest/fetchApi";
import Main from "../component/Main";
import Navbar from "../component/Navbar";

function Search() {
  const { searchItem } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchApi(
      `search?q=${searchItem}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`
    )
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [searchItem]);

  return (
    <>
      <Navbar />

      <div className="text-red-500">
        <Main videos={videos} />
      </div>
    </>
  );
}

export default Search;
