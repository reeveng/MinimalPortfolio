import { Box } from "@chakra-ui/react";
import ProgressBar from "./Progressbar";
import React from "react";

/**
 * @component ProgressBar
 * This component creates a progressbar in which every child progressbar has the same length and the same sharepercentage.
 *
 * @param  {number} percentage The percentage parameter is used to give the percentage to it's child ProgressBars
 * (where it is used to calculate if how much their percentagebar needs to be filled).
 * @param  {string} className The className parameter is used to give a different experience to the progressbar.
 * @param  {number} nrProgressbars The nrProgressbars parameter is used to declare the number of progressbars that the progressbar will be split in.
 *
 * @example
 * <ProgressBarImplementation percentage={45} nrProgressbars={4} /> // will generate 4 smaller progressbars with each displaying 25% of the percentage
 */
const ProgressBarImplementation = ({
  className,
  nrProgressbars,
  percentage = 0,
  max_items = 100,
}) => {
  nrProgressbars = nrProgressbars > 1 ? nrProgressbars : 1;
  const percentagePerBar = max_items / nrProgressbars;
  const arrayProgressbars = [];
  for (let i = 0; i < nrProgressbars; i += 1) {
    const min = i * percentagePerBar;
    const max = (i + 1) * percentagePerBar;
    arrayProgressbars.push({ min, max });
  }
  return (
    <Box
      style={{ width: `${max_items * 2 + 0.5 * max_items}rem` }}
      display="flex"
      justifyContent="space-between"
      className={className}
    >
      {arrayProgressbars.map(({ min, max }) => {
        return (
          <ProgressBar
            key={`${min}`}
            percentage={percentage}
            min={min}
            max={max}
            step={percentagePerBar}
          />
        );
      })}
    </Box>
  );
};

export default ProgressBarImplementation;
