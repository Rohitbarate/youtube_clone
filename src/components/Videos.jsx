import React from "react";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

import { Stack, Box } from "@mui/material";

const Videos = ({ videos, direction }) => {
  // console.log({VIDEOS:videos});

  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      {videos.map((item, index) => {
        console.log({videofeomVideo:item.video});
        return (
          <Box key={index}>
            {item.video?.videoId && <VideoCard video={item.video} />}
            {/* {item.video.channelId && <ChannelCard channelDetail={item.video} />} */}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
