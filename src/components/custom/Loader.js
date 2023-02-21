import React from "react";
import { CircularProgress, LinearProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
      <div className="container-fluid mb-4">
        <div className="container">
          <div className="blogs-page">
            <div className="row h-75">
              <div className="col d-flex justify-content-center">
                <Box sx={{ display: "flex" }}>
                  <CircularProgress color="inherit" />
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
