import React from "react";
import { useState, useEffect } from "react";

import Sidebar from "./Sidebar";
import Videos from "./Videos";

import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  console.log({ videos });

  const getVideos = async () => {
    const videos = await fetchFromAPI();
    // console.log({ videos });
    setVideos(videos);
  };

  useEffect(() => {
    getVideos();
    // fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
    // );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {videos.map((v, i) => {
        console.log(v.video.title);
        return (
          <div key={i} style={{ color: "red" }}>
            {v.video.title}
          </div>
        );
      })}
      {/* <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      > */}
      {/* <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Codophile
        </Typography>
      </Box> */}

      {/* <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box> */}
    </Stack>
  );
};

export default Feed;
