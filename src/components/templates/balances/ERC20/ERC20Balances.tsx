import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  VStack,
  Heading,
  Box,
  Text,
  Avatar,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEvmWalletTokenBalances, useEvmTokenPrice } from '@moralisweb3/next';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { getEllipsisTxt } from 'utils/format';
import { useNetwork } from 'wagmi';
import commaNumber from 'comma-number';

const ERC20Balances = () => {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');
  const { data } = useSession();
  const { chain } = useNetwork();
  const { data: tokenBalances } = useEvmWalletTokenBalances({
    address: data?.user?.address,
    chain: chain?.id,
    tokenAddresses: ['0x427a03fb96d9a94a6727fbcfbba143444090dd64'],
  });
  const { data: tokenPrice } = useEvmTokenPrice({
    address: '0x427a03fb96d9a94a6727fbcfbba143444090dd64',
    chain: chain?.id,
  });

  console.log(tokenPrice);

  useEffect(() => console.log('tokenBalances: ', tokenBalances), [tokenBalances]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        ERC20 Balances
      </Heading>
      {tokenBalances?.length ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
          <TableContainer w={'full'}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Token</Th>
                  <Th>Address</Th>
                  <Th>Amount</Th>
                  <Th>Price ($)</Th>
                  <Th>Total Value ($)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {tokenBalances?.map(({ token, value }, key) => (
                  <Tr key={`${token?.symbol}-${key}-tr`} _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                    <Td>
                      <HStack>
                        <Avatar size="sm" src={token?.logo || ''} name={token?.name} />
                        <VStack alignItems={'flex-start'}>
                          <Text as={'span'}>{token?.name}</Text>
                          <Text fontSize={'xs'} as={'span'}>
                            {token?.symbol}
                          </Text>
                        </VStack>
                      </HStack>
                    </Td>
                    <Td>{getEllipsisTxt(token?.contractAddress.checksum)}</Td>
                    <Td>{commaNumber(parseFloat(value).toFixed(4))}</Td>
                    <Td>${tokenPrice?.usdPrice.toFixed(4)}</Td>
                    <Td>${commaNumber(((tokenPrice?.usdPrice || 0) * parseFloat(value)).toFixed(4))}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box>Looks Like you do not have any ERC20 tokens</Box>
      )}
    </>
  );
};

export default ERC20Balances;
