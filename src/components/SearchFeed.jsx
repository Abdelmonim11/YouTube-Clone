import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?q=${searchTerm}&part=snippet,id`).then((data) =>
      setVideos(data.items),
    );
  }, [searchTerm]);
  return (
    <Box sx={{ p: 2, overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        <span style={{ color: "white" }}>Search Result for: </span>
        <span style={{ color: "#F31503" }}>Videos</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
