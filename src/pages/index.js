import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import Content, { MAX_ITEMS } from "components/Content";

import ProgressBarImplementation from "components/Progressbar/ProgressbarImplementation";
import { useState } from "react";

const Index = () => {
  const [page, setPage] = useState(0);

  return (
    <HStack h="100vh">
      <VStack w="full">
        <Box pos="absolute" style={{ top: "1rem" }}>
          <ProgressBarImplementation
            percentage={page + 1}
            max_items={MAX_ITEMS}
            nrProgressbars={MAX_ITEMS}
          />
        </Box>
        <Content page={page} />
        <Button
          onClick={() => {
            if (MAX_ITEMS > page) setPage(page + 1);
          }}
          pos="absolute"
          right="1rem"
          bottom="1rem"
          disabled={page === MAX_ITEMS - 1}
        >
          next
        </Button>
        <Button
          onClick={() => {
            if (page > 0) setPage(page - 1);
          }}
          pos="absolute"
          left="1rem"
          bottom="1rem"
          disabled={page === 0}
        >
          prev
        </Button>
      </VStack>
    </HStack>
  );
};

export default Index;
