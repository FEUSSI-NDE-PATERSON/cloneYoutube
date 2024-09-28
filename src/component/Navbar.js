import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleForm = () => {
    navigate(`/search/:${search}`);
    setSearch("");
  };
  return (
    <div className="flex   items-center justify-between p-2 shadow-sm shadow-white">
      <Link to="/" className="text-red-500 font-bold items-center ">
        <div className="flex items-center">
          <img src="/1.jpg" className="w-16 h-16 rounded-full" />
          <span className="text-white ml-2">Youtube</span>
        </div>
      </Link>
      <div className="bg-white rounded-full  flex justify-between items-center ">
        <input
          type="search"
          className=" outline-none  p-1 rounded-full  "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search color="gray" onClick={handleForm} />
      </div>
    </div>
  );
};

export default Navbar;
