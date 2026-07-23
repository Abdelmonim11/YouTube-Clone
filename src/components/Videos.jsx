import { Box, Stack } from "@mui/material";
import {VideoCard, ChannelCard} from "./";


function Videos({ videos }) {
  console.log(videos);
  return (
    <Stack
      direction={"row"}
      sx={{ flexWrap: "wrap", justifyContent: "start", gap: 2 }}
    >
      {videos.map((item, idx) => (
        <Box key={idx} sx={{color: 'white'}}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
