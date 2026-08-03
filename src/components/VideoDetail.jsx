import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import ReactPlayer from "react-player";

import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState({});
  const [videos, setVideos] = useState({});
  
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0]),
    );

    fetchFromApi(`search?relatedToVideoId=${id}&part=snippet&type=video`).then(data => setVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) {
    return "Loading...";
  } // it will ignore the whole bottom lines and bottom return

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box sx={{ flex: "1" }}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              src={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              sx={{ color: "#fff", fontWeight: "bold", p: 2 }}
              variant="h5"
            >
              {title}
            </Typography>
            <Stack
              direction={"row"}
              sx={{
                justifyContent: "space-between",
                color: "#fff",
                px: 2,
                py: 1,
              }}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "submit1", md: "h6" }}
                  sx={{ color: "#fff" }}
                >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "14px", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack
                direction={"row"}
                sx={{ gap: "20px", alignItems: "center" }}
              >
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      <Box sx={{ px: 2, py: {md: 1, xs: 5}, justifyContent: "center", alignContent: "center" }}>
          <Videos videos={videos} direction="column" />
      </Box>
      </Stack>

    </Box>
  );
}

export default VideoDetail;
