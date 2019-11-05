import {
    blackColor,
    whiteColor,
    hexToRgb
  } from "../../assets/jss/material-dashboard";
  
  const cardStyle = {
    card: {
      border: "0",
      marginBottom: "30px",
      borderRadius: "6px",
      color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
      background: whiteColor,
      width: "1000px",
      boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      margin:'auto',
    },
    cardPlain: {
      background: "transparent",
      boxShadow: "none"
    },
    cardProfile: {
      marginTop: "150px",
      textAlign: "center"
    },
    cardChart: {
      "& p": {
        marginTop: "0px",
        paddingTop: "0px"
      }
    }
  };
  
  export default cardStyle;
  