import { Flex, VStack, Text } from "@chakra-ui/react";
import FooterSections from "./FooterSections/FooterSections";

const Footer = () => {
  return (
    <Flex
      flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      justifyContent='space-around'
      alignItems='center'
      bg='gray.50'>
      <VStack w='50%' justifyContent='flex-start' p={6}>
        <Text fontSize='2xl' fontWeight='500'>
          Dope Shoppers
        </Text>
        <Text>© 2022 Dope Shoppers</Text>
      </VStack>
      <FooterSections />
    </Flex>
  );
};

export default Footer;
