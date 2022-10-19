import { Box } from "@chakra-ui/react";
import React from "react";

/**
 * @component ProgressBar
 * This component creates a basic progressbar.
 *
 * @param  {number} percentage The percentage parameter is used to calculate the percentage that needs to be displayed within this progressbar.
 * @param  {number} min The min parameter is the minimum percentage required to display something on this progressbar
 * (e.g. min = 25, nothing will be displayed if the percentage parameter is lower than or equal to 25).
 * @param  {number} max The max parameter is the maximum percentage required to display something on this progressbar
 * (e.g. min = 50, the whole progressbar will be filled if the percentage parameter is greater than or equal to 50).
 * @param  {number} step The step parameter is the step that each progressbar takes to the next/previous progressbar contains.
 *
 * @example
 * <ProgressBar percentage={45} min={0} max={25} step={25} /> // will be filled completely
 * <ProgressBar percentage={45} min={25} max={50} step={25} /> // will be nearly fully filled
 * <ProgressBar percentage={45} min={50} max={75} step={25} /> // will be empty
 * <ProgressBar percentage={45} min={75} max={100} step={25} /> // will be empty
 */
const ProgressBar = ({ percentage, min, max, step }) => {
  let percentageStyles = {
    height: "2rem",
    borderRadius: "100%",
    backgroundColor: "white",
    background: "radial-gradient(cyan, black)",
  };
  if (max <= percentage) percentageStyles.width = "100%";
  else {
    const sharePercentage = Math.ceil((percentage % step) * (100 / step));
    if (min <= percentage) percentageStyles.width = `${sharePercentage}%`;
    else percentageStyles.width = "0%";
  }
  return (
    <Box
      style={{
        backgroundColor: "black",
        borderRadius: "100%",
        display: "block",
        height: "2rem",
        background: "radial-gradient(white, black)",
        margin: "0 0.25rem",
      }}
      w="full"
    >
      <div style={percentageStyles} />
    </Box>
  );
};

export default ProgressBar;
