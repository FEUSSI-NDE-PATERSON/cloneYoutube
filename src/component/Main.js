import React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Verified } from "@mui/icons-material";
function Main({ videos, mt }) {
  return (
    <div className={`flex flex-wrap justify-center gap-2 mt-[${mt}]`}>
      {videos.map((video) => (
        <div className="w-[80%] sm:w-[250px] shadow shadow-white bg-tranparent overflow-hidden">
          <Link to={`/video/:${video?.id?.videoId}`}>
            <img
              component="img"
              alt="green iguana"
              className="h-[150px] -mt-5 w-[100%] object-cover"
              src={video?.snippet?.thumbnails?.high?.url}
            />
          </Link>
          <div className="p-5">
            <p className="mt-2 w-[250px] text-white">
              {video?.snippet?.title.slice(0, 50)}...
            </p>
            <div className="flex items-center">
              <Link to={`/channel/:${video?.snippet?.channelId}`}>
                <p className="text-[10px] font-weight font-[roboto] text-gray-400">
                  {video?.snippet.channelTitle.toUpperCase()}
                </p>
              </Link>
              <Verified color={"green"} className="ml-3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
