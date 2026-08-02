import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState({});
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.items[0]);
    });
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data.items);
      },
    );
  }, []);

  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(0deg,rgba(34, 193, 195, 1) 0%, rgba(2, 217, 206, 1) 0%, rgba(255, 192, 56, 1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-100px" />
      </Box>

      <Box sx={{ display: "flex", p: "2" }}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos}/>
      </Box>
    </Box>
  );
}

export default ChannelDetail;
