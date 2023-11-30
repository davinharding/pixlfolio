import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Image
        src={colorMode === 'dark' ? '/pixlverse_logo.png' : '/pixlverse_logo.png'}
        height={45}
        width={150}
        alt="Moralis"
      />
      <div>Pixlfolio</div>
    </div>
  );
};

export default MoralisLogo;
