import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: "40svh",
        width: "100%",
        background: "#1F271B",
        position: "relative",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          width: "1280px",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          flexDirection: "column",
        }}
      >
        Footer
        <div
          style={{
            backgroundColor: "#FFD23F",
            width: "100px",
            height: "5px",
          }}
        />
      </div>
      <Typography
        variant="h1"
        sx={{
          color: "#fff",
          position: "absolute",
          fontWeight: "700",
          zIndex: 1,
          bottom: 0,
          right: "2%",
          fontSize: "23svh",
          opacity: "0.05",
        }}
      >
        CV. Karya Abadi
      </Typography>
    </div>
  );
};

export default Footer;
