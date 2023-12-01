/* eslint-disable no-inline-comments */
import { Box, Grid, Heading } from '@chakra-ui/react';
import { useEvmWalletNFTs } from '@moralisweb3/next';
import { NFTCard } from 'components/modules';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useNetwork } from 'wagmi';

const NFTBalances = () => {
  const { data } = useSession();
  const { chain } = useNetwork();
  const { data: nfts } = useEvmWalletNFTs({
    address: data?.user?.address,
    chain: chain?.id,
    tokenAddresses: [
      '0x364C828eE171616a39897688A831c2499aD972ec', // Sappy Seals
      '0x1C70D0A86475CC707b48aA79F112857e7957274f', // Staked Seals
      '0x4e76c23FE2a4E37B5E07b5625E17098bAaB86c18', // Pixl Pets
      '0xF0ea56402B2E2B27556D7abF4236C7327722Fe41', // Pixlverse Items
    ]
  });

  useEffect(() => console.log('nfts: ', nfts), [nfts]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        NFT Balances
      </Heading>
      {nfts?.length ? (
        <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={6}>
          {nfts.map((nft, key) => (
            <NFTCard nft={nft} key={key} />
          ))}
        </Grid>
      ) : (
        <Box>Looks Like you do not have any NFTs</Box>
      )}
    </>
  );
};

export default NFTBalances;
