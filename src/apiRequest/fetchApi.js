import axios from "axios";
const BASEURL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "e717a6378fmshc4eb17b72dfcdc7p13ae8bjsn70ccbe34e0fe",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchApi = async (url) => {
  const { data } = await axios.get(`${BASEURL}/${url}`, options);
  return data;
};
