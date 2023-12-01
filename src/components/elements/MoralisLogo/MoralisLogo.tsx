import { useColorMode, Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex align="center">
      <Box>
        <Image
          src={colorMode === 'dark' ? '/pixlverse_logo.png' : '/pixlverse_logo.png'}
          height={45}
          width={150}
          alt="Moralis"
        />
      </Box>
      <Text ml="3">Pixlfolio</Text>
    </Flex>
  );
};

export default MoralisLogo;
