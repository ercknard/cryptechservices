import React from "react";
import { Backdrop, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";

interface ChangeLoaderProps {
  loading: boolean;
  colorSetId: number; // Add this prop to track color set changes
}

const toOpacityAnimation = keyframes`
  0% {
   opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const zoomAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;

const ChangeLoader: React.FC<ChangeLoaderProps> = ({ loading, colorSetId }) => {
  const theme = useTheme();

  const colorKey = colorSetId.toString();

  const colorSetImageMap: { [key: string]: string } = {
    1: "/static/images/blue-upper-right.svg",
    2: "/static/images/green-upper-right.svg",
    3: "/static/images/yellow-upper-right.svg",
    4: "/static/images/orange-upper-right.svg",
    5: "/static/images/pink-upper-right.svg",
    6: "/static/images/white-upper-right.svg",
  };

  const colorLogoImageMap: { [key: string]: string } = {
    1: "/static/images/blue-ctlogo.png",
    2: "/static/images/green-ctlogo.png",
    3: "/static/images/yellow-ctlogo.png",
    4: "/static/images/orange-ctlogo.png",
    5: "/static/images/pink-ctlogo.png",
    6: "/static/images/white-ctlogo.png",
  };

  const imageLogoSrc = colorLogoImageMap[colorKey] || colorLogoImageMap[1];

  const imageSrc = colorSetImageMap[colorKey] || colorSetImageMap[1];

  return (
    <Backdrop
      open={loading}
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: (theme) => `${theme.palette.custom.primaryBackground}`,
      }}
    >
      <Box
        component={"img"}
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "contained",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          animation: `${toOpacityAnimation} 3.25s infinite ease-in-out`,
        }}
      />

      <Box
        component={"img"}
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          transform: "scaleY(-1)",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "contained",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          animation: `${toOpacityAnimation} 3.25s infinite ease-in-out`,
        }}
      />

      <Box
        component={"img"}
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          transform: "scaleX(-1)",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "contained",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          animation: `${toOpacityAnimation} 3.25s infinite ease-in-out`,
        }}
      />

      <Box
        component={"img"}
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          transform: "scale(-1)",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "contained",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          animation: `${toOpacityAnimation} 3.25s infinite ease-in-out`,
        }}
      />

      <Box
        key={colorSetId}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box component="img" width={{ md: 55 }} alt="Logo" src={imageLogoSrc} />
        <Typography
          variant="title"
          fontSize={"2.5rem"}
          color={"custom.primaryText"}
          sx={{
            marginTop: 2,
            textShadow: "6px 6px 8px rgba(0, 0, 0, .5)",
            animation: `${zoomAnimation} 3.25s infinite ease-in-out`,
          }}
        >
          Cryptech Services
        </Typography>
        <Typography
          variant="h5"
          color={"custom.primaryText"}
          sx={{
            marginTop: 2,
            textShadow: "6px 6px 8px rgba(0, 0, 0, .5)",
          }}
        >
          Your Vision, Our Expertise.
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default ChangeLoader;
