import { Box, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

const info = [
  {
    mainDing: () => (
      <>
        <Text fontSize="3xl">Hey there</Text>
        <Text fontSize="3xl"> I'm reeveng</Text>
      </>
    ),
  },
  {
    mainDing: () => (
      <>
        <Text fontSize="3xl">Let me take you</Text>
        <Text fontSize="2xl">on a journey</Text>
      </>
    ),
  },
  {
    mainDing: () => (
      <Text fontSize="3xl">
        It all started a{" "}
        <Text as="span" fontWeight="bold" color="tomato">
          long
        </Text>{" "}
        while ago
        {/* blockchain, machine learning & web3, VR
        augmented reality portfolio with smart contracts using => water
        !     ""  '
           '
           ''  
         '  '   ! ''
            iron
        
        and webassembly 
        */}
      </Text>
    ),
  },
  {
    mainDing: () => (
      <>
        <Box bg="black" opacity="80%" p="3" m="4">
          <Text fontSize="3xl">
            I learned how to make circles, triangles, rectangles and squares
          </Text>
        </Box>
        <Box
          rounded="full"
          left="50%"
          top="50%"
          zIndex="-2"
          pos="absolute"
          bg="blue.500"
          padding="16"
        />
        <Box
          left="40%"
          top="60%"
          zIndex="-1"
          pos="absolute"
          bg="orange.400"
          padding="16"
        />
        <Box
          left="60%"
          top="40%"
          css={{
            width: 0,
            height: 0,
            borderLeft: "4rem solid transparent",
            borderRight: "4rem solid transparent",
            borderBottom: "8rem solid",
          }}
          zIndex="-3"
          pos="absolute"
        />
      </>
    ),
  },
  {
    mainDing: () => <>and combined</>,
    /* create some html ding in here :uwu: */
  },
  {
    mainDing: () => (
      <Text fontSize="3xl">
        But ofc that isn't enough to impress some people
      </Text>
      /* add animated fractals */
    ),
  },
];

export const MAX_ITEMS = info.length;

const Content = ({ page }) => {
  const [restartAnimation, setRestartAnimation] = useState(false);
  const Ding = info[page]?.mainDing;

  useEffect(() => {
    setRestartAnimation(true);
  }, [page]);

  useEffect(() => {
    if (restartAnimation) setRestartAnimation(false);
  }, [restartAnimation]);

  if (restartAnimation) {
    return <></>;
  }

  return (
    <Box className="animationdings animationdings-spinny">
      <Ding />
    </Box>
  );
};

export default Content;
